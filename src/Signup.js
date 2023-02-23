import { KeyboardAvoidingView, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { firebase } from '../firebase'
import styles from '../styles/SignupStyle'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');

  registerUser = async (email,password, fullname) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.updateProfile({
          displayName: `${fullname}`
        }).catch((error) => {
          alert(error.message)
        })
        .then(() => {
          firebase.firestore().collection('users')
          .doc(firebase.auth().currentUser.uid)
          .set({
            fullname,
            email
          })
          .catch((error) => {
            alert(error.message)
          })
        })
        .catch((error) => {
          alert(error.message)
        })
      })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
  <KeyboardAvoidingView
      style={styles.loginContainer}

    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Full Name'
          onChangeText={(fullname) => setFullname(fullname)}
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder='Email'
          onChangeText={(email) => setEmail(email)}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email'
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          onChangeText={(password) => setPassword(password)}
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => registerUser(email, password, fullname)}
          style={styles.button}
        >
          <Text styles={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )

}

export default Signup