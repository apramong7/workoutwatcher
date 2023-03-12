import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Metrics from './Metrics'
import PosesMenu from "./PosesMenu";
import Loading from './Loading'


const Stack = createNativeStackNavigator();

const Use = () => {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator
          navigationOptions= {{
              headerShown: false,
            }}
    >
      <Stack.Screen options={{headerShown:false}} name="Metrics" component={Metrics} />
      <Stack.Screen options={{headerShown:false}} name="PosesMenu" component={PosesMenu} />
      <Stack.Screen options={{headerShown:false}} name="Loading" component={Loading} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Use