import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../assets/images';
import CustomInput from '../../components/CustomInput';
import GradientWrapper from '../../components/GradientWrapper';
import PrimaryButton from '../../components/PrimaryButton';
import SocialButton from '../../components/SocialButton';
import {
  COLORS,
  navigationStrings,
} from '../../constants/Lang/navigationStrings';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


const LoginScreen = ({navigation}: NativeStackScreenProps<any>) => {


  const [passwordVisible, setPasswordVisible] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <GradientWrapper>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.innerContainer}>
          <View style={styles.logoContainer}>
            <Image source={images.LOGO} />
          </View>

          <Text style={styles.title}>{navigationStrings.TITLE}</Text>
          <Text style={styles.subtitle}>{navigationStrings.SUBTITLE}</Text>

          <CustomInput placeholder={navigationStrings.EMAIL_PLACEHOLDER} />

          <CustomInput
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
              <View style={[styles.checkbox, remember ? styles.checkedBox:null]}>
                {remember ? <Text style={styles.checkMark}>✓</Text>:null}
              </View>
              <Text style={styles.remember}>{navigationStrings.REMEMBER}</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.forgot}>{navigationStrings.FORGOT}</Text>
            </TouchableOpacity>
          </View>

          <PrimaryButton title={navigationStrings.LOGIN} />

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
            <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.SIGNUP)}>
              <Text style={styles.signup}>{navigationStrings.SIGNUP}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </GradientWrapper>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

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

export default LoginScreen;
