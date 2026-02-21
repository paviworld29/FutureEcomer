import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientWrapperProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  colors?: string[];
}

const GradientWrapper: React.FC<GradientWrapperProps> = ({
  children,
  style,
  colors = ['#AFC4FF', '#F2F4F7'],
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 1 }}
      style={[{ flex: 1 }, style]}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientWrapper;
