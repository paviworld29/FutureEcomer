import React from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle, StyleProp } from 'react-native'

interface IconBoxProps {
  children: React.ReactNode
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

const IconBox: React.FC<IconBoxProps> = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, style]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}

export default IconBox

const styles = StyleSheet.create({
  container: {

    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
})