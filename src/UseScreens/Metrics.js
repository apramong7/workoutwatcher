import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Button, FlatList, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../styles/UseStyle'

const initialCalibrationData = [
  { id: 1, 
    textName: 'Shoulder Width:', 
    textInputName: 'cm' },
  {
    id: 2,
    textName: 'Hip Width:',
    textInputName: 'cm',
  }
]


const Metrics = ({navigation}) => {
  const [disabled, setDisable] = useState(true);
  const [metricsCompleted, setMetricsCompleted] = useState(false);
  const [shoulderWidth, setShoulderWidth] = useState(null);
  const [hipWidth, setHipWidth] = useState(null);

  useEffect(() => {
    if(shoulderWidth && hipWidth) {
      setDisable(false)
    }
  }, [shoulderWidth, hipWidth])

  registerMetrics = (shoulderWidth, hipWidth, piState) => {
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid)
    .set({ 
      ['shoulderWidth']:shoulderWidth,
      ['hipWidth']: hipWidth,
      ['isPiOn']: piState,
    }, 
    { merge: true })
    .catch((error) => {
      alert(error.message)
    })
    setMetricsCompleted(true);
  }


  return (
    <View style={styles.calibrationContainer}>
      <View style={styles.inputContainer}>
         <Text style={styles.textCalibration}>
           Initial Calibration
         </Text>
      </View>

    <FlatList
      style={{ width: '100%', flex: 1 }}
      data={initialCalibrationData}
      contentContainerStyle={{paddingBottom:1}} 
      maxToRenderPerBatch={2}
      initialNumToRender={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View
        style={styles.columnContainer}>
          <Text style={styles.textName}>
            {item.textName}
          </Text>
          <TextInput
            placeholder={item.textInputName}
            placeholderTextColor="#303030"
            onChangeText={(a) => {
              if(item.textName === 'Shoulder Width:') {
                setShoulderWidth(a)
              } else {
                setHipWidth(a)
              }
            }}
            style={styles.textInputName}
          />
        </View>
      )}
      ListFooterComponent={() => 
      <View>
      <TouchableOpacity
       style={styles.enterButtonSection}
       disabled={disabled}
       activeOpacity={disabled ? 1 : 0.4}
       onPress={() => {
        if(shoulderWidth && hipWidth) {
          registerMetrics(shoulderWidth, hipWidth, true)
          navigation.navigate("PosesMenu")
        }
       }}
      >
         <Text style={disabled? styles.disableButton : styles.enterButton}>Done</Text>
      </TouchableOpacity>
      </View>
      }   
    />
  </View>

  )
}

export default Metrics