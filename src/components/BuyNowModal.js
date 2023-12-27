import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import TouchableComponent from './TouchableComponent';
import ModalComponent from './ModalComponent';
import styles from '../screens/ProductDetails/styles';
import PurchaseConfirmationModal from './PurchaseConfirmationModal';

const BuyNowModal = props => {
  const {buy} = props ?? false;
  const [buyNow, setBuyNow] = useState(buy);

  useEffect(() => {
    setBuyNow(buy);
  }, [buy]);

  const onClickConfirm = () => {
    setTimeout(() => {
      setBuyNow(false);
      <PurchaseConfirmationModal purchaseConfirm={true} />;
    }, 2000);
  };

  const onClickCancel = () => {
    setBuyNow(false);
  };

  return (
    <ModalComponent visible={buyNow} transparent={true}>
      <View style={styles.buyModalCenter}>
        <View style={styles.buyModal}>
          <Text style={styles.purchaseConfirmText}>
            Are you sure you want to purchase this item?
          </Text>
          <TouchableComponent
            style={styles.purchaseConfirm}
            onPress={onClickConfirm}>
            <Text>Confirm</Text>
          </TouchableComponent>
          <TouchableComponent
            style={styles.purchaseCancel}
            onPress={onClickCancel}>
            <Text>Cancel</Text>
          </TouchableComponent>
        </View>
      </View>
    </ModalComponent>
  );
};

export default BuyNowModal;
