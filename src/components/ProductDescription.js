import React from 'react';
import {Text, View} from 'react-native';

import ImageComponent from './ImageComponent';
import styles from '../screens/ProductDetails/styles';

const ProductDescription = props => {
  const {productDetail} = props ?? {};

  const {
    thumbnail = '',
    brand = '',
    description = '',
    price = '',
    title = '',
    category = '',
  } = productDetail ?? {};

  return (
    <View>
      <Text style={styles.productTitle}>{title}</Text>
      {thumbnail && <ImageComponent uri={thumbnail} style={styles.image} />}
      <View style={styles.content}>
        <Text style={styles.productHeading}>Brand </Text>
        <Text style={styles.productResp}>{brand}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.productHeading}>Category </Text>
        <Text style={styles.productResp}>{category}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.productHeading}>Description </Text>
        <Text style={styles.productResp}>{description}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.productHeading}>Price </Text>
        <Text style={styles.productResp}>{price}</Text>
      </View>
    </View>
  );
};

export default ProductDescription;
