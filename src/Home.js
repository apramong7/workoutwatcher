import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/HomeStyle'
import Icon from 'react-native-vector-icons/FontAwesome';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width - 16;

const Home = () => {
  const [name, setName] = useState('')
  const [lastLogIn, setLastLogin] = useState('')

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


  const MyBarChart = () => {
    return (
      <>
        <Text style={styles.header}>USAGE</Text>
        <BarChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
              },
            ],
          }}
          width={screenWidth}
          height={220}
          yAxisLabel={''}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#94a6a8',
            backgroundGradientTo: '#a2afb3',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Icon name='user-circle-o' size={80} color='#B3C9CE' />
      <Text style={{fontSize: 22, fontWeight: '400', color: '#9aa1a9', marginTop: 8}}>
        {name.fullname}
      </Text>
      <Text style={{fontSize: 18, fontWeight: '400', color: '#9aa1a9'}}>
        Welcome Back!
      </Text>
      <Text style={{fontSize: 16, fontWeight: '400', color: '#9aa1a9', marginTop: 30}}>
        Date of Last Use : {lastLogIn}
      </Text>
      <MyBarChart />
    </SafeAreaView>
  )
}

export default Home