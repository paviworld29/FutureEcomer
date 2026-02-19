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

const LoginScreen = () => {
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
              <View style={[styles.checkbox, remember && styles.checkedBox]}>
                {remember && <Text style={styles.checkMark}>✓</Text>}
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
            <TouchableOpacity>
              <Text style={styles.signup}>{navigationStrings.SIGNUP}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </GradientWrapper>
  );
};

const styles = StyleSheet.create({
  signupQuestion: {
    fontSize: 13,
    color: COLORS.TEXT_SECONDARY,
  },

  safeArea: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.BLACK,
    marginTop: 20,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
    marginTop: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  remember: {
    color: COLORS.TEXT_DARK_GRAY,
    fontSize: 13,
  },

  forgot: {
    color: COLORS.LINK,
    fontSize: 13,
    fontWeight: '500',
  },

  orText: {
    textAlign: 'center',
    color: COLORS.TEXT_MUTED,
    marginTop: 10,
  },

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 150,
  },

  signup: {
    color: COLORS.LINK,
    fontWeight: '600',
    fontSize: 13,
  },

  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1.5,
    borderColor: COLORS.CHECKBOX_BORDER,
    borderRadius: 4,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkedBox: {
    backgroundColor: COLORS.CHECKBOX_BACKGROUND,
  },

  checkMark: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
