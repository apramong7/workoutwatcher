import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../../firebase'
import Icon from 'react-native-vector-icons/Foundation';
import IconHand from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../styles/UseStyle'


const Instructions = () => {
  const [rightFootDistance, setrightFootDistance] = useState(null);
  const [leftFootDistance, setleftFootDistance] = useState(null);
  const [rightFootRotation, setrightFootRotation] = useState(null);
  const [leftFootRotation, setleftFootRotation] = useState(null);
  const [rightFootPressure, setrightFootPressure] = useState(null);
  const [leftFootPressure, setleftFootPressure] = useState(null);

  useEffect(() => {
    async function func1() { 
      // function body that changes stateUpdatedByFunc1 */ 
      const subscriber = firebase.firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .onSnapshot(documentSnapshot => {
          setrightFootDistance(documentSnapshot.data().rightFootDistance);
          setleftFootDistance(documentSnapshot.data().leftFootDistance);
          setrightFootRotation(documentSnapshot.data().rightFootRotation);
          setleftFootRotation(documentSnapshot.data().leftFootRotation);
          setrightFootPressure(documentSnapshot.data().pressureRightFoot);
          setleftFootPressure(documentSnapshot.data().pressureLeftFoot);
        });
  
      // Stop listening for updates when no longer required
      return () => subscriber();
      }
     
      func1()
  }, []);


  getInstructions = (positionInst) => {
    if (!rightFootDistance && !leftFootDistance && !rightFootRotation && !leftFootRotation && !rightFootPressure && !leftFootPressure) {
      return <Text>Loading...</Text>
    }

    if(positionInst) { 
      return(
        <>
          <View style={styles.rowInstructions}>
            {leftFootDistance && Object.keys(leftFootDistance).map((keyNameleftFoot, i) => {
              return (<Text key={i} style={styles.textInstructions}>{leftFootDistance[keyNameleftFoot]}</Text>)
            })} 
            {leftFootRotation && Object.keys(leftFootRotation).map((keyNameleftFoot, i) => {
              return (<Text key={i} style={styles.textInstructions}>{leftFootRotation[keyNameleftFoot]}</Text>)
            })} 
          
   
            {rightFootDistance && Object.keys(rightFootDistance).map((keyName, i) => {
              return (<Text key={i} style={styles.textInstructions}>{rightFootDistance[keyName]}</Text>)
            })} 
            {rightFootRotation && Object.keys(rightFootRotation).map((keyName, i) => {
              return (<Text key={i} style={styles.textInstructions}>{rightFootRotation[keyName]}</Text>)
            })} 
           </View> 
        </>
      )
    }
  

    return(
      <>
        <View style={styles.rowInstructions}>
          {leftFootPressure && Object.keys(leftFootPressure).map((keyNameleftFoot, i) => {
            return (<Text key={i} style={styles.textInstructions}>{leftFootPressure[keyNameleftFoot]}</Text>)
          })} 
          {/* <Icon name='foot' size={180} color='black' /> */}
          {rightFootPressure && Object.keys(rightFootPressure).map((keyName, i) => {
            return (<Text key={i} style={styles.textInstructions}>{rightFootPressure[keyName]}</Text>)
          })} 
          {/* <IconHand name='hand-left' size={180} color='black' /> */}
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