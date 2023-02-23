import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase'
import styles from '../styles/UseScreenStyles'


const UseScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Use Screen</Text>
    </View>
  )
}

export default UseScreen