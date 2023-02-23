import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/HeaderStyle'
import { firebase } from '../firebase'

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'light', color: '#fff', fontSize: 24, alignItems: 'center'}}>
        {props.name}
      </Text>
    </View>
  )
}

export default Header
