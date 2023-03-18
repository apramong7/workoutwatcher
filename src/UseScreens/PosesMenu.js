import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../styles/UseStyle'

const  YogaPoses = [
  { key: "Tree Pose" },
  { key: "Warrior 1 Pose" },
  { key: "Warrior 2 Pose" },
  { key: "Triangle Right Pose" },
  { key: "Triangle Left Pose" },
]

const PosesMenu = ({navigation}) => {
  const [poseSelected, setPoseSelected] = useState(null);
  const [newPose, setNewPose] = useState(false);


  useEffect(() => {
    if(poseSelected !== null) {
      firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid)
      .set({ 
        ['poseSelected']: poseSelected,
      }, 
      { merge: true })
      .catch((error) => {
        alert(error.message)
      })
    }

  }, [newPose]);

  checkPose = () => {
    // if(poseSelected === null) {
    //   return <Text>Loading</Text>
    // }
    navigation.navigate("Loading")
  }


  // registerPose = () => {

  // }


  return (
    <>
      <Text style={styles.textSelect}>Select a yoga pose</Text>
      <View style={styles.containerFlatList}>
       <FlatList
          data={ YogaPoses }
          renderItem={ ({item}) =>  
             <TouchableOpacity
               style={styles.buttonYogaPose}
               onPress={() => {setPoseSelected(item.key), setNewPose(!newPose), checkPose()}}
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