import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

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
      {rightIcon && (
        <TouchableOpacity onPress={onRightPress}>
          <Image source={rightIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginTop: 15,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
  },
});