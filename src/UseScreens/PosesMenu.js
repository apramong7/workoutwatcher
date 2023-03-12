import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../styles/UseStyle'

const  YogaPoses = [
  { key: "Tree Pose" },
  { key: "Reclining Hero Pose" },
  { key: "Warrior 1 Pose" },
  { key: "Triangle Pose" },
  { key: "Downward Dog Pose" },
]


const PosesMenu = ({navigation}) => {
  const [poseSelected, setPoseSelected] = useState('');
  const [newPose, setNewPose] = useState(false);
  const [handsInstructions, setHandsInstructions] = useState(null);
  const [feetInstructions, setFeetInstructions] = useState(null);
  const [handsPressure, setHandsPressure] = useState(null);
  const [feetPressure, setFeetPressure] = useState(null);

  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .onSnapshot(documentSnapshot => {
        setHandsInstructions(documentSnapshot.data().hands);
        setFeetInstructions(documentSnapshot.data().feet);
        setHandsPressure(documentSnapshot.data().pressureHands);
        setFeetPressure(documentSnapshot.data().pressureFeet);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [newPose]);

  checkPose = () => {
   navigation.navigate("Loading")
  }


  return (
    <>
      <Text style={styles.textSelect}>Select a yoga pose</Text>
      <View style={styles.containerFlatList}>
       <FlatList
          data={ YogaPoses }
          renderItem={ ({item}) =>  
             <TouchableOpacity
               style={styles.buttonYogaPose}
               onPress={() => {setPoseSelected(item.key), setNewPose(true), checkPose()}}
             >
                 <Text style={styles.textYogaPose} >{item.key}</Text>
             </TouchableOpacity>
            }
          numColumns={2}
       />
     </View>
    </>
  );
}

export default PosesMenu