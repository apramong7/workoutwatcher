import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase'
import styles from '../styles/AnalyticsScreenStyles'


const AnalyticsScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Analytics Screen</Text>
    </View>
  )
}

export default AnalyticsScreen