import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { COLORS } from '../constants/Lang/navigationStrings';

interface PrimaryButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: object;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  style,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      style={[styles.buttonWrapper, style]}
      onPress={onPress}
    >
      <Text style={styles.loginText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: COLORS.PRIMARY,

    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(10),

    alignItems: 'center',
    marginTop: verticalScale(20),
  },

  loginText: {
    color: COLORS.WHITE,
    fontWeight: '600',
    fontSize: moderateScale(16),
  },
});
