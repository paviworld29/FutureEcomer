import React, { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../assets/images';
import CustomInput from '../../components/CustomInput';
import GradientWrapper from '../../components/GradientWrapper';
import PrimaryButton from '../../components/PrimaryButton';
import SocialButton from '../../components/SocialButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  COLORS,
  navigationStrings,
} from '../../constants/Lang/navigationStrings';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { useLoginMutation } from '../../redux/services/authApi';



const LoginScreen = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigation = useNavigation<any>();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const validate = (): boolean => {
    if (email.trim() === '') {
      Alert.alert('Email is required');
      return false;
    }

    if (!email.includes('@')) {
      Alert.alert('Email must contain @');
      return false;
    }

    if (password.trim() === '') {
      Alert.alert('Password required');
      return false;
    }

    if (password.length < 6) {
      Alert.alert('Password must be at least 6 characters');
      return false;
    }

    return true;
  };


  const handleLogin = async () => {
    const isValid = validate();
    if (!isValid) return;

    try {
      const response = await login({
        email,
        password,
      }).unwrap();

      const token = response?.token;

      if (token) {
        await AsyncStorage.setItem('userToken', token);
        // Alert.alert('Login Success');
        // navigation.replace('Tabs');
      } else {
        Alert.alert('Token not received');
      }
    } catch (error: any) {
      Alert.alert(error?.data?.message || 'Login Failed');
    }
  };

  return (
    <GradientWrapper>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.innerContainer}>
          <View style={styles.logoContainer}>
            <Image source={images.LOGO} />
          </View>

          <Text style={styles.title}>{navigationStrings.TITLE}</Text>
          <Text style={styles.subtitle}>{navigationStrings.SUBTITLE}</Text>

          <CustomInput
            value={email}
            onChangeText={setEmail}
            placeholder={navigationStrings.EMAIL_PLACEHOLDER}
          />

          <CustomInput
            value={password}
            onChangeText={setPassword}
            placeholder={navigationStrings.PASSWORD_PLACEHOLDER}
            secureTextEntry={!passwordVisible}
            rightIcon={passwordVisible ? images.EYEON : images.EYESOFF}
            onRightPress={() => setPasswordVisible(!passwordVisible)}
          />

          <View style={styles.row}>
            <TouchableOpacity
              style={styles.rememberContainer}
              onPress={() => setRemember(!remember)}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.checkbox,
                  remember ? styles.checkedBox : null,
                ]}
              >
                {remember ? (
                  <Text style={styles.checkMark}>✓</Text>
                ) : null}
              </View>
              <Text style={styles.remember}>
                {navigationStrings.REMEMBER}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.forgot}>
                {navigationStrings.FORGOT}
              </Text>
            </TouchableOpacity>
          </View>

          <PrimaryButton
            onPress={handleLogin}
            title={navigationStrings.LOGIN}
            disabled={isLoading}
          />

          <Text style={styles.orText}>{navigationStrings.OR}</Text>

          <SocialButton
            title={navigationStrings.GOOGLE}
            icon={images.GOOGLELOGO}
          />

          <SocialButton
            title={navigationStrings.FACEBOOK}
            icon={images.FACEBOOKLOGO}
          />

          <View style={styles.signupRow}>
            <Text style={styles.signupQuestion}>
              {navigationStrings.SIGNUP_QUESTION}{' '}
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(navigationStrings.SIGNUP)
              }
            >
              <Text style={styles.signup}>
                {navigationStrings.SIGNUP}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </GradientWrapper>
  );
};

export default LoginScreen;

// ✅ Styles Outside Component (Best Practice)
const styles = StyleSheet.create({
  safeArea: { flex: 1 },

  innerContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: verticalScale(40),
  },

  title: {
    fontSize: moderateScale(32),
    fontWeight: '700',
    color: COLORS.BLACK,
    marginTop: verticalScale(20),
  },

  subtitle: {
    fontSize: moderateScale(14),
    color: COLORS.TEXT_SECONDARY,
    marginTop: verticalScale(10),
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(20),
  },

  remember: {
    color: COLORS.TEXT_DARK_GRAY,
    fontSize: moderateScale(13),
  },

  forgot: {
    color: COLORS.LINK,
    fontSize: moderateScale(13),
    fontWeight: '500',
  },

  orText: {
    textAlign: 'center',
    color: COLORS.TEXT_MUTED,
    marginTop: verticalScale(10),
    fontSize: moderateScale(13),
  },

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(70),
  },

  signupQuestion: {
    fontSize: moderateScale(13),
    color: COLORS.TEXT_SECONDARY,
  },

  signup: {
    color: COLORS.LINK,
    fontWeight: '600',
    fontSize: moderateScale(13),
  },

  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: moderateScale(18),
    height: moderateScale(18),
    borderWidth: moderateScale(1.5),
    borderColor: COLORS.CHECKBOX_BORDER,
    borderRadius: moderateScale(4),
    marginRight: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkedBox: {
    backgroundColor: COLORS.CHECKBOX_BACKGROUND,
  },

  checkMark: {
    color: COLORS.WHITE,
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
});