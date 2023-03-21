import { View, Text, StyleSheet, Dimensions, KeyboardAvoidingView, TextInput, TouchableOpacity, Button, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Foundation';
import IconHand from 'react-native-vector-icons/Ionicons';
import styles from '../styles/UseStyle'
import { ScrollView } from 'react-native-gesture-handler';


const Use = () => {
  const [metricsCompleted, setMetricsCompleted] = useState(false);
  const [poseSelected, setPoseSelected] = useState('');
  const [newPose, setNewPose] = useState(false);
  const [shoulderWidth, setShoulderWidth] = useState(null);
  const [hipWidth, setHipWidth] = useState(null);
  const [rightFootInstructions, setrightFootInstructions] = useState(null);
  const [leftFootInstructions, setleftFootInstructions] = useState(null);
  const [rightFootPressure, setrightFootPressure] = useState(null);
  const [leftFootPressure, setleftFootPressure] = useState(null);
  const [isPoseCorrect, setIsPoseCorrect] = useState(false);
  const [disabled, setDisable] = useState(true);
  const [returnToMenu, setReturnToMenu] = useState(false);

  const  YogaPoses = [
    { key: "Tree Pose" },
    { key: "Reclining Hero Pose" },
    { key: "Warrior 1 Pose Right" },
    { key: "Warrior 1 Pose Left" },
    { key: "Triangle Pose" },
    { key: "Downward Dog Pose" },
  ]

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

  useEffect(() => {
    if(shoulderWidth && hipWidth) {
      setDisable(false)
    }
  }, [shoulderWidth, hipWidth])

  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .onSnapshot(documentSnapshot => {
        setIsPoseCorrect(documentSnapshot.data().isPoseCorrect)
        setrightFootInstructions(documentSnapshot.data().rightFoot);
        setleftFootInstructions(documentSnapshot.data().leftFoot);
        setrightFootPressure(documentSnapshot.data().pressurerightFoot);
        setleftFootPressure(documentSnapshot.data().pressureleftFoot);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [newPose]);

  useEffect(() => {

  }, [returnToMenu])
  

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
          <Icon name='foot' size={180} color='black' />
        </View> 
        <View style={styles.rowInstructions}>
          {Object.keys(rightFootPressure).map((keyName, i) => {
            return (<Text key={i} style={styles.textInstructions}>{rightFootPressure[keyName]}</Text>)
          })} 
        ?  <IconHand name='hand-left' size={180} color='black' />
        </View>
      </>
    )
  }

  if((isPoseCorrect === false) && newPose) {
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

  if(newPose && isPoseCorrect === true) {
    return(
      <>
      <Text>Perfect! Hold the pose for 30 seconds</Text>
      <View>
        <TouchableOpacity
      //   style={styles.enterButtonSection}
         onPress={() => {setReturnToMenu(true), console.log('select a new pose has been set to true')}}
        >
           <Text style={styles.returnMenu} >Select another pose</Text>
        </TouchableOpacity>
      </View>
      </>
    )
  }


  getMenu =() => {
    return (
      <>
        <Text style={styles.textSelect}>Select a yoga pose</Text>
        <View style={styles.containerFlatList}>
         <FlatList
            data={ YogaPoses }
            renderItem={ ({item}) =>  
               <TouchableOpacity
                 style={styles.buttonYogaPose}
                 onPress={() => {setPoseSelected(item.key), setNewPose(true)}}
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

  
    if(metricsCompleted) {
    return (
      <>
        <Text style={styles.textSelect}>Select a yoga pose</Text>
        <View style={styles.containerFlatList}>
         <FlatList
            data={ YogaPoses }
            renderItem={ ({item}) =>  
               <TouchableOpacity
                 style={styles.buttonYogaPose}
                 onPress={() => {setPoseSelected(item.key), setNewPose(true)}}
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

  // if(returnToMenu) {
  //   return (
  //     <>
  //       <Text>This is back to menu</Text>
  //       {/* <Text style={styles.textSelect}>Select a yoga pose</Text>
  //       <View style={styles.containerFlatList}>
  //        <FlatList
  //           data={ YogaPoses }
  //           renderItem={ ({item}) =>  
  //              <TouchableOpacity
  //                style={styles.buttonYogaPose}
  //                onPress={() => {setPoseSelected(item.key), setNewPose(true), setReturnToMenu(false)}}
  //              >
  //                  <Text style={styles.textYogaPose} >{item.key}</Text>
  //              </TouchableOpacity>
  //             }
  //           numColumns={2}
  //        /> */}
  //      {/* </View> */}
  //     </>
  //   );
  // }

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
          registerMetrics(shoulderWidth, hipWidth)
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

export default Use

