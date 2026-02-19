import { Image, StyleSheet, Text, TouchableOpacity, View, ImageSourcePropType } from 'react-native'
import React from 'react'


interface SocialButtonProps {
    icon?: ImageSourcePropType;
    title:string
}
const SocialButton : React.FC<SocialButtonProps> =({icon,title}) => {
  return (
   <TouchableOpacity style={styles.socialButton}>
    <Image source={icon} style={{ width: 20, height: 20, marginRight: 10 }}/>
    <Text style={styles.loginText}>{title}</Text>
   </TouchableOpacity>
  )
}

export default SocialButton

const styles = StyleSheet.create({
     loginText: {
    color: '#1A1C1E',
    fontWeight: '600',
    fontSize: 16,
  },
   socialButton: {
    backgroundColor: '#FFF',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
})