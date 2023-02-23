import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase'
import styles from '../styles/SignupScreenStyles'


const SignupScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Sign up Screen</Text>
    </View>
  )
}

export default SignupScreen