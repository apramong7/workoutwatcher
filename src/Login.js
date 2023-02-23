import { KeyboardAvoidingView,View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from "../firebase"
import styles from '../styles/LoginStyle'

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  loginUser = async (email,password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      alert(error.message)
    }
  }

  return(
  <KeyboardAvoidingView
      style={styles.loginContainer}

    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          onChangeText={(email) => setEmail(email)}
          autoCapitalize='none'
          autoCorrect={false}
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
          onPress={() => loginUser(email,password)}
          style={styles.button}
        >
          <Text styles={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.register}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.signUpText}> Sign up</Text>
        </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )

}

export default Login
