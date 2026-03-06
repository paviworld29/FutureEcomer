import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

interface CustomInputProps {
  placeholder?: string;
  secureTextEntry?: boolean;
  rightIcon?: ImageSourcePropType;
  onRightPress?: () => void;
  value?: string;
  error?: string;
  onChangeText?: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  secureTextEntry,
  rightIcon,
  onRightPress,
  value,
  error,
  onChangeText,
}) => {
  return (
    <View style={styles.wrapper}>


      <View style={[styles.container, error ? styles.errorBorder : null]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="black"
          secureTextEntry={secureTextEntry}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />

        {rightIcon ? (
          <TouchableOpacity onPress={onRightPress}>
            <Image source={rightIcon} style={styles.icon} />
          </TouchableOpacity>
        ) : null}
      </View>

     
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: verticalScale(15),
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',

    paddingHorizontal: moderateScale(14),
    paddingVertical: verticalScale(4),

    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: '#E5E7EB',
  },

  errorBorder: {
    borderColor: 'red',
  },

  input: {
    flex: 1,
    paddingVertical: verticalScale(10),
    fontSize: moderateScale(16),
  },

  icon: {
    width: moderateScale(20),
    height: moderateScale(20),
    resizeMode: 'contain',
  },

  errorText: {
    color: 'red',
    fontSize: moderateScale(12),
    marginTop: verticalScale(4),
  },
});