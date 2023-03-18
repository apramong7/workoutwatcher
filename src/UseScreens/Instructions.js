import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../../firebase'
import Icon from 'react-native-vector-icons/Foundation';
import IconHand from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../styles/UseStyle'


const Instructions = () => {
  const [rightFootInstructions, setrightFootInstructions] = useState(null);
  const [leftFootInstructions, setleftFootInstructions] = useState(null);
  const [rightFootPressure, setrightFootPressure] = useState(null);
  const [leftFootPressure, setleftFootPressure] = useState(null);

  useEffect(() => {
    async function func1() { 
      // function body that changes stateUpdatedByFunc1 */ 
      const subscriber = firebase.firestore()
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
        .onSnapshot(documentSnapshot => {
          // setIsPoseCorrect(documentSnapshot.data().isPoseCorrect)
          setrightFootInstructions(documentSnapshot.data().rightFoot);
          setleftFootInstructions(documentSnapshot.data().leftFoot);
          setrightFootPressure(documentSnapshot.data().pressureRightFoot);
          setleftFootPressure(documentSnapshot.data().pressureLeftFoot);
        });
  
      // Stop listening for updates when no longer required
      return () => subscriber();
      }
     
      func1()
  }, []);


  getInstructions = (positionInst) => {
    if (!rightFootInstructions || !leftFootInstructions || !rightFootPressure || !leftFootPressure) {
      return <Text>Loading...</Text>
    }

    if(positionInst) { 
      return(
        <>
          <View style={styles.rowInstructions}>
            {Object.keys(leftFootInstructions).map((keyNameleftFoot, i) => {
              return (<Text key={i} style={styles.textInstructions}>{leftFootInstructions[keyNameleftFoot]}</Text>)
            })} 
          </View> 
          <View style={styles.rowInstructions}>
            {Object.keys(rightFootInstructions).map((keyName, i) => {
              return (<Text key={i} style={styles.textInstructions}>{rightFootInstructions[keyName]}</Text>)
            })} 
          </View>
        </>
      )
    }
  

    return(
      <>
        <View style={styles.rowInstructions}>
          {Object.keys(leftFootPressure).map((keyNameleftFoot, i) => {
            return (<Text key={i} style={styles.textInstructions}>{leftFootPressure[keyNameleftFoot]}</Text>)
          })} 
          {/* <Icon name='foot' size={180} color='black' /> */}
        </View> 
        <View style={styles.rowInstructions}>
          {Object.keys(rightFootPressure).map((keyName, i) => {
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