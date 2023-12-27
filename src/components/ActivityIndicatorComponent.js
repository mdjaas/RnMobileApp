import React from 'react';
import {ActivityIndicator} from 'react-native';

const ActivityIndicatorComponent = props => {
  const {size = '', color = ''} = props ?? {};

  return <ActivityIndicator size={size} color={color} />;
};

export default ActivityIndicatorComponent;
