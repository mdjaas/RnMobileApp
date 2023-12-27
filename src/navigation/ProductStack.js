import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Local imports
import ProductDetails from '../screens/ProductDetails';
import ProductsList from '../screens/ProductsList';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator initialRouteName={'ProductsList'}>
      <Stack.Screen
        name="ProductsList"
        component={ProductsList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          title: 'Description',
          headerStyle: {backgroundColor: 'orange'},
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductStack;
