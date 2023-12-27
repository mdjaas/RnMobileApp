import React, {useState} from 'react';
import {View, Text} from 'react-native';

import TouchableComponent from './TouchableComponent';
import ModalComponent from './ModalComponent';
import styles from '../screens/ProductDetails/styles';

const PurchaseConfirmationModal = props => {
  const {purchaseConfirm} = props ?? {};
  const [purchaseConfirmation, setPurchaseConfirmation] =
    useState(purchaseConfirm);

  const onClickDone = () => {
    setPurchaseConfirmation(false);
    props.navigation.navigate('ProductsList');
  };

  return (
    <ModalComponent visible={purchaseConfirmation} transparent={true}>
      <View style={styles.buyModalCenter}>
        <View style={styles.buyModal}>
          <Text style={styles.orderProcess}>Your order has been processed</Text>
          <TouchableComponent
            style={styles.purchaseConfirm}
            onPress={onClickDone}>
            <Text>Ok</Text>
          </TouchableComponent>
        </View>
      </View>
    </ModalComponent>
  );
};

export default PurchaseConfirmationModal;
