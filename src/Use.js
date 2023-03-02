import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Foundation';
import IconHand from 'react-native-vector-icons/Ionicons';
import styles from '../styles/UseStyle'


const Use = () => {
  const [name, setName] = useState('')
  const [lastLogIn, setLastLogin] = useState('')
  const [metrics, setMetrics] = useState('')
  const [metricsCompleted, setMetricsCompleted] = useState(false)

  useEffect(() => {
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot) => {
      if(snapshot.exists){
        setName(snapshot.data())
      }
      else {
        console.log('User does not exist')
      }
    })

    const user = firebase.auth().currentUser;
    let lastLogInAt = user.metadata.lastLoginAt;
    lastLogInAt = parseInt(lastLogInAt);
    let dateLastLogInAt = new Date();
    dateLastLogInAt.setTime(lastLogInAt);

    setLastLogin(dateLastLogInAt.toString().slice(0, 24));
  }, [])


  if(metricsCompleted) {
    return (
      <SafeAreaView
       edges={['bottom', 'left', 'right']} 
       style={styles.useContainerTwo}>

        <View style={styles.inputContainer}>
          <Text style={styles.textPosition}>
            Position Correction
          </Text>
        </View> 

        <View style={styles.positionContainer}>
          <View style={styles.rowPosition}>
            <Text style={styles.textInstructions}>*feet instructions*</Text>
            <Text style={styles.textInstructions}>*hand instructions*</Text>
          </View>
          <View style={styles.rowPosition}>
            <Text style={styles.textInstructions}>Move Left Foot: {"\n"}*insert movement*</Text>
            <Text style={styles.textInstructions}>Move Left Foot: {"\n"}*insert movement*</Text>
          </View>
          <View style={styles.rowPosition}>
            <Text style={styles.textInstructions}>Move Right Foot:{"\n"}*insert movement*</Text>
            <Text style={styles.textInstructions}>Move Right Hand:{"\n"}*insert movement*</Text>
          </View>
          </View>

          <View style={styles.inputContainer}>
          <Text style={styles.textPosition}>
            Pressure Correction
          </Text>
        </View> 

          <View style={styles.rowPosition}>
            <Text style={styles.textInstructions}>*feet instructions*{"\n"}<Icon name='foot' size={180} color='black' /></Text>
            <Text style={styles.textInstructions}>*hand instructions*{"\n"}<IconHand name='hand-left' size={180} color='black' /></Text>
          </View>
      </SafeAreaView>
    );
  }


  return (
    <KeyboardAvoidingView
      style={styles.useContainer}
    >
      <View style={styles.inputContainer}>
        <Text style={styles.textCalibration}>
          Initial Calibration
        </Text>
        <View style={styles.row}>
          <Text style={styles.textTitle}>Shoulder Width:</Text>
          <TextInput style={styles.textInput}
            placeholder="cm"
            defaultValue={''}
            multiline={false}
          /> 
        </View>
        <View style={styles.row}>
          <Text style={styles.textTitle}>Hip Width:</Text>
          <TextInput style={styles.textInput}
            placeholder="cm"
            defaultValue={''}
            multiline={false}
          /> 
        </View>
        {/* <View style={styles.row}>
          <Text style={styles.textTitle}>Weight:</Text>
          <TextInput style={styles.textInput}
            placeholder="cm"
            defaultValue={''}
            multiline={false}
          /> 
        </View> */}
        {/* <Text style={styles.instructions}>Stand straight for foot detection</Text>
        <View style={styles.detectionSection}>
          <Text style={styles.detectionButton}>Foot detected!</Text>
        </View>
        <Text style={styles.instructions}>Hands on mat</Text>
        <View style={styles.detectionSection}>
          <Text style={styles.detectionButton}>Hands detexted!</Text>
        </View> */}
        <TouchableOpacity
          style={styles.enterButtonSection}
          onPress={() => setMetricsCompleted(true)}
        >
            <Text style={styles.enterButton}>Done</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Use