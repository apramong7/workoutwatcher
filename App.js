import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebase } from './firebase';
// import LoginScreen from './components/screens/LoginScreen';
// import HomeScreen from './components/screens/HomeScreen';
// import SignupScreen from './components/screens/SignupScreen';
// import UseScreen from './components/screens/UseScreen';
// import AnalyticsScreen from './components/screens/AnalyticsScreen';
import Header from './components/Header';
import Signup from './src/Signup';
import Login from './src/Login';
import Home from './src/Home';
import Use from './src/Use';
import Analytics from './src/Analytics';
import { Button } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const Menu = createDrawerNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if(initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber();
  }, []);


  if(initializing) return null;

  if(!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
         name='Login'
         component={Login}
         options={{
          headerTitle: () => <Header name="Workout Watcher"/>,
          headerTintColor: '#fff',
          headerTitleAlign: "center",
          headerStyle: {
            height: 150,
            backgroundColor: "#788b91",
            elevation: 25,
          }
         }}
        />
        <Stack.Screen
         name='Signup'
         component={Signup}
         options={{
          headerTitle: () => 
          <View>
            <Header name="Workout Watcher"/>
          </View>
          ,
          headerStyle: {
            height: 150,
            backgroundColor: "#788b91",
            shadowColor: '#000',
            elevation: 25
          }
         }}
        />
      </Stack.Navigator>
    );
  }

  function CustomerDrawerContent(props) {
    return(
      <>
        <View>
          <Text>HEADER</Text>
        </View>
        <DrawerContentScrollView {...props}>
          <View style={{flex:1}}>
            <DrawerItemList {...props} />
          </View>
        <View>
        <Button 
          title="LOGOUT" 
          onPress={async () => {
          props.navigation.closeDrawer();
          await firebase.auth().signOut()
        }}>LOGOUT</Button>
        </View>
        </DrawerContentScrollView>
      </>
    )
  }

  return(
    // <Stack.Navigator>
    //     <Stack.Screen
    //      name='Home'
    //      component={Home}
    //      options={{
    //       headerTitle: () => <Header name="Home"/>,
    //       headerStyle: {
    //         height: 150,
    //         backgroundColor: "#788b91",
    //         shadowColor: '#000',
    //         elevation: 25
    //       }
    //      }}
    //     />
    // </Stack.Navigator>
    <Menu.Navigator
      initialRouteName="Home"
      drawerPosition='left'
      drawerType="front"
      edgeWidth={100}
      hideStatusBar={false}
      drawerContent = {(props) => 
        <CustomerDrawerContent {...props} />
      }
      overlayColor='#556668'
      drawerContentOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
        activeBackgroundColor: '#556668'
      }}
      drawerStyle={{
        backgroundColor: '#788b91',
        width: 250,
      }}
      screenOptions={{
        headerShown: true,
        swipeEnabled: true,
        gestureEnabled: true,
        headerTitleAlign: 'center',
        headerStyle: {
         backgroundColor: '#788b91'
        },
        headerTintColor: '#ffffff'
    }}
    >
    <Menu.Screen
     name='Home'
     component={Home}
     options={{
      headerTitle: () => <Header name="Home"/>,
      headerStyle: {
        backgroundColor: "#788b91",
        shadowColor: '#000',
        elevation: 25
      }
     }}
    />
    <Menu.Screen name="Use" component={Use} />
    <Menu.Screen name="Analytics" component={Analytics} />
  </Menu.Navigator>
  )

}

export default  () => {
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#c1cad5',
    width: '100%',
    padding: 15,
    alignItems: 'center',
  }
});