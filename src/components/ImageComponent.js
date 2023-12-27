import React from 'react';
import {Image} from 'react-native';

const ImageComponent = props => {
  const {uri = '', style = {}} = props ?? {};

  return (
    <Image
      source={{
        uri,
      }}
      style={style}
    />
  );
};

export default ImageComponent;
