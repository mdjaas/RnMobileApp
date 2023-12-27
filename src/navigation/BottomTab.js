import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';

import ProductStack from './ProductStack';
import LoginStack from './LoginStacks';
import UserPosts from '../screens/Posts';
import ProfileScreen from '../screens/ProfileScreen';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={'ProductList'}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Posts"
        component={UserPosts}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="chatbox-outline" size={size} />
            </View>
          ),
          tabBarBadge: '',
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductStack}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <Ionicons name="cart-outline" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <Ionicons name="person-outline" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
