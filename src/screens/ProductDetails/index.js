import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getUniqueProduct} from '../../services';
import TouchableComponent from '../../components/TouchableComponent';
import styles from './styles';
import ProductDescription from '../../components/ProductDescription';
import ModalComponent from '../../components/ModalComponent';
import BuyNowModal from '../../components/BuyNowModal';
import PurchaseConfirmationModal from '../../components/PurchaseConfirmationModal';

import {
  getProductDetails,
  clearProductDetails,
} from '../../redux/actions/ProductDescriptionAction';

const ProductDetails = props => {
  const {productId} = props?.route?.params ?? {};

  const [buyNow, setBuyNow] = useState(false);
  const [purchaseConfirmation, setPurchaseConfirmation] = useState(false);
  
  const dispatch = useDispatch();

  const {productDesc = {}, isLoading = false} = useSelector(
    state => state?.productDescriptionReducer,
  );

  useEffect(() => {
    getProductDetail();

    return () => {
      dispatch(clearProductDetails());
    };
  }, []);


  const onBuyNow = () => {
    setBuyNow(true);
  };

  const onClickCancel = () => {
    setBuyNow(false);
  };

  const onClickConfirm = () => {
    setTimeout(() => {
      setBuyNow(false);
      setPurchaseConfirmation(true);
    }, 2000);
  };

  const onClickDone = () => {
    setPurchaseConfirmation(false);
    props.navigation.navigate('ProductsList');
  };

  const getProductDetail = async () => {
    if (productId) {
      dispatch(getProductDetails({id: productId}));
    }
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" animating={isLoading} />
      <View style={styles.productDetails}>
        <ProductDescription productDetail={productDesc} />
      </View>

      <View style={styles.buyButtonContainer}>
        <TouchableComponent style={styles.buyButton} onPress={onBuyNow}>
          <Text>Buy Now</Text>
        </TouchableComponent>
      </View>

      <BuyNowModal buy={buyNow} />
      <PurchaseConfirmationModal />
    </View>
  );
};

export default ProductDetails;
