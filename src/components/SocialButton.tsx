import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import { moderateScale, verticalScale } from 'react-native-size-matters';

interface SocialButtonProps {
  icon?: ImageSourcePropType;
  title: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, title }) => {
  return (
    <TouchableOpacity style={styles.socialButton}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.loginText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  socialButton: {
    backgroundColor: '#FFF',

    paddingVertical: verticalScale(10),


    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: '#E5E7EB',

    marginTop: verticalScale(10),

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginRight: moderateScale(10),
    resizeMode: 'contain',
  },

  loginText: {
    color: '#1A1C1E',
    fontWeight: '600',
    fontSize: moderateScale(16),
  },
});