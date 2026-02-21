import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import images from '../../assets/images';
import CustomInput from '../../components/CustomInput';
import GradientWrapper from '../../components/GradientWrapper';
import PrimaryButton from '../../components/PrimaryButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  COLORS,
  navigationStrings,
} from '../../constants/Lang/navigationStrings';
const SignUpScreen = ({navigation}:NativeStackScreenProps<any>) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <GradientWrapper>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{navigationStrings.REGISTER}</Text>
          <Text style={styles.subtitle}>
            {navigationStrings.CREATE_ACCOUNT_MESSAGE}
          </Text>
          <CustomInput placeholder={navigationStrings.FIRST_NAME} />
          <CustomInput placeholder={navigationStrings.LAST_NAME} />
          <CustomInput placeholder={navigationStrings.EMAIL_PLACEHOLDER} />
          <CustomInput
            placeholder={navigationStrings.SET_PASSWORD}
            secureTextEntry={!passwordVisible}
            rightIcon={passwordVisible ? images.EYESOFF : images.EYEON}
            onRightPress={() => setPasswordVisible(!passwordVisible)}
          />
          <PrimaryButton title={navigationStrings.REGISTER} />
          <View style={styles.signupRow}>
            <Text style={styles.signupText}>
              {navigationStrings.ALREADY_HAVE_ACCOUNT}{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
              <Text style={styles.loginText}>{navigationStrings.LOGIN}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </GradientWrapper>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginText: {
    color: COLORS.LINK,
    fontWeight: '600',
    fontSize: moderateScale(13),
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(160),
  },
  signupText: {
    fontSize: moderateScale(13),
    color: COLORS.TEXT_SECONDARY,
    fontWeight: '500',
  },
  title: {
    fontSize: moderateScale(32),
    fontWeight: '700',
    marginTop: verticalScale(50),
    color: COLORS.BLACK,
  },
  subtitle: {
    fontSize: moderateScale(12),
    marginTop: verticalScale(10),
    color: COLORS.TEXT_SECONDARY,
  },
  innerContainer: {
    paddingHorizontal: moderateScale(24),
  },
});
