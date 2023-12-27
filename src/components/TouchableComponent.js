import React from 'react';
import {TouchableOpacity} from 'react-native';

const TouchableComponent = props => {
  const {onPress = () => {}, style = {}} = props ?? {};

  return (
    <TouchableOpacity onPress={onPress} style={style} activeOpacity={0.9}>
      {props?.children}
    </TouchableOpacity>
  );
};

export default TouchableComponent;
