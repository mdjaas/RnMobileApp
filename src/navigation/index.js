import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Local
import LoginStack from './LoginStacks';
import ProductStack from './ProductStack';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

export default function MainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginStack"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginStack" component={LoginStack} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
