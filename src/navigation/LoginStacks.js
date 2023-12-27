import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Local imports
import Login from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
    </Stack.Navigator>
  );
};

export default LoginStack;
