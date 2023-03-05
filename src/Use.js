import { View, Text, StyleSheet, Dimensions, KeyboardAvoidingView, TextInput, TouchableOpacity, Button, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Foundation';
import IconHand from 'react-native-vector-icons/Ionicons';
import styles from '../styles/UseStyle'


const numColumns = 2;

const Use = () => {
  const [name, setName] = useState('')
  const [lastLogIn, setLastLogin] = useState('')
  const [metricsCompleted, setMetricsCompleted] = useState(false);
  const [poseSelected, setPoseSelected] = useState('');
  const [newPose, setNewPose] = useState(false);
  const [shoulderWidth, setShoulderWidth] = useState();
  const [hipWidth, setHipWidth] = useState();


  const  YogaPoses = [
    { key: "Tree Pose" },
    { key: "Reclining Hero Pose" },
    { key: "Warrior 1 Pose" },
    { key: "Triangle Pose" },
    { key: "Downward Dog Pose" },
  ]

  useEffect(() => {
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid)
    .set({ 
      ['poseSelected']:poseSelected,
    }, 
    { merge: true })
    .catch((error) => {
      alert(error.message)
    })
  }, [poseSelected])


  registerMetrics = (shoulderWidth, hipWidth) => {
          firebase.firestore().collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({ 
            ['shoulderWidth']:shoulderWidth,
            ['hipWidth']: hipWidth 
          }, 
          { merge: true })
          .catch((error) => {
            alert(error.message)
          })
       setMetricsCompleted(true);
  }


  if(newPose) {
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

  
    if(metricsCompleted) {
    return (
      <SafeAreaView
       edges={['bottom', 'left', 'right']} 
       style={styles.useContainerTwo}>
        <Text style={styles.textSelect}>Select a yoga pose</Text>
        <View style={styles.useContainer}>
         <FlatList
            style={newStyles.container}
            data={ YogaPoses }
            renderItem={ ({item}) =>  
               <TouchableOpacity
                 style={newStyles.item}
                 onPress={() => {setPoseSelected(item.key), setNewPose(true)}}
               >
                   <Text style={newStyles.itemText} >{item.key}</Text>
               </TouchableOpacity>
              }
            numColumns={2}
         />
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
            onChangeText={(shoulder) => setShoulderWidth(shoulder)}
          /> 
        </View>
        <View style={styles.row}>
          <Text style={styles.textTitle}>Hip Width:</Text>
          <TextInput style={styles.textInput}
            placeholder="cm"
            defaultValue={''}
            multiline={false}
            onChangeText={(hip) => setHipWidth(hip)}
          /> 
        </View>
        <TouchableOpacity
          style={styles.enterButtonSection}
          onPress={() => registerMetrics(shoulderWidth, hipWidth)}
        >
            <Text style={styles.enterButton}>Done</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Use


const newStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#7b8c93',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns*0.5, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
    fontSize: 20,
  },
});