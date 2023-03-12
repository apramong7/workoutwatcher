import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../../firebase'
import Icon from 'react-native-vector-icons/Foundation';
import IconHand from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../styles/UseStyle'


const Instructions = () => {
  const [handsInstructions, setHandsInstructions] = useState(null);
  const [feetInstructions, setFeetInstructions] = useState(null);
  const [handsPressure, setHandsPressure] = useState(null);
  const [feetPressure, setFeetPressure] = useState(null);

  useEffect(() => {
    async function func1() { 
      // function body that changes stateUpdatedByFunc1 */ 
      const subscriber = firebase.firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .onSnapshot(documentSnapshot => {
          // setIsPoseCorrect(documentSnapshot.data().isPoseCorrect)
          setHandsInstructions(documentSnapshot.data().hands);
          setFeetInstructions(documentSnapshot.data().feet);
          setHandsPressure(documentSnapshot.data().pressureHands);
          setFeetPressure(documentSnapshot.data().pressureFeet);
        });
  
      // Stop listening for updates when no longer required
      return () => subscriber();
      }
     
      func1()
  }, []);


  getInstructions = (positionInst) => {
    if (!handsInstructions || !feetInstructions || !handsPressure || !feetPressure) {
      return <Text>Loading...</Text>
    }

    if(positionInst) { 
      return(
        <>
          <View style={styles.rowInstructions}>
            {Object.keys(feetInstructions).map((keyNameFeet, i) => {
              return (<Text key={i} style={styles.textInstructions}>{feetInstructions[keyNameFeet]}</Text>)
            })} 
          </View> 
          <View style={styles.rowInstructions}>
            {Object.keys(handsInstructions).map((keyName, i) => {
              return (<Text key={i} style={styles.textInstructions}>{handsInstructions[keyName]}</Text>)
            })} 
          </View>
        </>
      )
    }
  

    return(
      <>
        <View style={styles.rowInstructions}>
          {Object.keys(feetPressure).map((keyNameFeet, i) => {
            return (<Text key={i} style={styles.textInstructions}>{feetPressure[keyNameFeet]}</Text>)
          })} 
          <Icon name='foot' size={180} color='black' />
        </View> 
        <View style={styles.rowInstructions}>
          {Object.keys(handsPressure).map((keyName, i) => {
            return (<Text key={i} style={styles.textInstructions}>{handsPressure[keyName]}</Text>)
          })} 
          <IconHand name='hand-left' size={180} color='black' />
        </View>
      </>
    )
  }

  return (
    <ScrollView
     edges={['bottom', 'left', 'right']} 
     style={styles.useContainerTwo}>

      <View style={styles.inputContainer}>
        <Text style={styles.textPosition}>
          Position Correction
        </Text>
      </View> 

      <View style={styles.columnInstructions}>
          {getInstructions(true)}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.textPosition}>
          Pressure Correction
        </Text>
      </View> 

      <View style={styles.columnInstructions}>
          {getInstructions(false)}
      </View>

    </ScrollView>
  );

}

export default Instructions