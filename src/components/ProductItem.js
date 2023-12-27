import React from 'react';
import {Image, View, Text, ImageBackground} from 'react-native';
import TouchableComponent from './TouchableComponent';

const ProductItem = ({item, onPressItem}) => {
  return (
    <TouchableComponent
      style={{
        flex: 1,
        flexDirection: 'row',
        padding: 13,
      }}
      onPress={onPressItem}>

        <Image
          style={{
            width: 60,
            height: 60,
            alignSelf: 'center',
            borderRadius: 30,
          }}
          source={{
            uri: item.thumbnail,
          }}
        />
   

      <View style={{ flex: 1, marginLeft: 10}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {item.title}
        </Text>

        <Text  style={{
            fontSize: 12,
          }}>{item.description}</Text>
      </View>
    </TouchableComponent>
  );
};

export default ProductItem;
