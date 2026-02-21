import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';


interface CustomInputProps {
  placeholder?: string;
  secureTextEntry?: boolean;
  rightIcon?: ImageSourcePropType;
  onRightPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  secureTextEntry,
  rightIcon,
  onRightPress,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
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
          <Image source={rightIcon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CustomInput;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFF',

    paddingHorizontal: moderateScale(14),
    paddingVertical: verticalScale(4),

    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: '#E5E7EB',

    marginTop: verticalScale(15),
  },

  input: {
    flex: 1,

    paddingVertical: verticalScale(10),
    fontSize: moderateScale(16),
  },

  icon: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginLeft: moderateScale(8),
    resizeMode: 'contain',
  },
});
