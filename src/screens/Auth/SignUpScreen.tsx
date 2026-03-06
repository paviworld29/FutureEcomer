import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import images from '../../assets/images';
import CustomInput from '../../components/CustomInput';
import GradientWrapper from '../../components/GradientWrapper';
import PrimaryButton from '../../components/PrimaryButton';

import {
  COLORS,
  navigationStrings,
} from '../../constants/Lang/navigationStrings';
import { useSignupMutation } from '../../redux/services/authApi';
import Toast from 'react-native-toast-message';
const SignUpScreen = ({ navigation }: NativeStackScreenProps<any>) => {
  const [signup, { isLoading }] = useSignupMutation();

  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState<string>('');
  const [lastNameError, setLastNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const validate = () => {
    let valid = true;

    if (!email) {
      setEmailError('Email is requred');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Enter valid Email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is Required');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError('password must be 6 characters');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!firstName) {
      setFirstNameError('Enter First Name');
      valid = false;
    } else {
      setFirstNameError('');
    }

    if (!lastName) {
      setLastNameError('Enter last name');
      valid = false;
    } else {
      setLastNameError('');
    }

    return valid;
  };

  const handleSubmit = async () => {
    const valid = validate();
    if (!valid) return;

    try {
      const response = await signup({
        firstName,
        lastName,
        email,
        password,
      }).unwrap();
      Alert.alert('Sinup Succesfully now you can login');
      navigation.navigate(navigationStrings.LOGIN);
    } catch (error:any) {
   Toast.show({
  type: 'error',
  position: 'bottom',
  text1: 'Signup Failed',
  text2: error?.data?.message ,
  text2Style: {
    fontSize: 16,
  },
});
    }
  };

  return (
    <GradientWrapper>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{navigationStrings.REGISTER}</Text>
          <Text style={styles.subtitle}>
            {navigationStrings.CREATE_ACCOUNT_MESSAGE}
          </Text>
          <CustomInput
            placeholder={navigationStrings.FIRST_NAME}
            value={firstName}
            onChangeText={setFirstName}
            error={firstNameError}
          />
          <CustomInput
            placeholder={navigationStrings.LAST_NAME}
            value={lastName}
            onChangeText={setLastName}
            error={lastNameError}
          />
          <CustomInput
            placeholder={navigationStrings.EMAIL_PLACEHOLDER}
            value={email}
            onChangeText={setEmail}
            error={emailError}
          />
          <CustomInput
            value={password}
            onChangeText={setPassword}
            error={passwordError}
            placeholder={navigationStrings.SET_PASSWORD}
            secureTextEntry={!passwordVisible}
            rightIcon={passwordVisible ? images.EYESOFF : images.EYEON}
            onRightPress={() => setPasswordVisible(!passwordVisible)}
          />
          <PrimaryButton
            title={navigationStrings.REGISTER}
            onPress={handleSubmit}
          />
          <View style={styles.signupRow}>
            <Text style={styles.signupText}>
              {navigationStrings.ALREADY_HAVE_ACCOUNT}{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(navigationStrings.LOGIN)}
            >
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
