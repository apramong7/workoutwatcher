import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../styles/UseStyle'


const HoldPose = ({navigation}) => {
  const [isPoseCorrect, setIsPoseCorrect] = useState(null);


  useEffect(() => {
    async function func1() { 
    // function body that changes stateUpdatedByFunc1 */ 
    const subscriber = firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .onSnapshot(async (documentSnapshot) => {
        let checkPose = await documentSnapshot.data().isPoseCorrect
        setIsPoseCorrect(checkPose)
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
    }
   
    func1()
   }, []) // only executes on component mounting phase
   
   useEffect(() => { 
    async function func2()  { 
        /* function body that depends on stateUpdatedByFunc1 */ 
        if(isPoseCorrect === false) {
            navigation.navigate('Instructions')
        }
    }
   
    if (isPoseCorrect) {
     func2() // only call func2 if the state is not undefined or null
    }
   },[isPoseCorrect]) // this gets executed after updating the state
   



  return(
    <>
    <Text>Perfect! Hold the pose for 30 seconds</Text>
    <View>
      <TouchableOpacity
    //   style={styles.enterButtonSection}
       onPress={() => {navigation.navigate('PosesMenu')}}
      >
         <Text style={styles.returnMenu} >Select another pose</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

export default HoldPose