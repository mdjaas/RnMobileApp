import React from 'react';
import {TextInput} from 'react-native';

const InputComponents = props => {
  const {
    placeholder = '',
    value = '',
    onChangeText = () => {},
    style = {},
    secureTextEntry = false,
  } = props ?? {};

  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={style}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default InputComponents;
