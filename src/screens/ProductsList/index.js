import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {SegmentedButtons, Appbar} from 'react-native-paper';
import Collapsible from 'react-native-collapsible';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProductItem from '../../components/ProductItem';
import styles from './styles';
import FlatListComponent from '../../components/FlatListComponent';

export default function ProductList(props) {
  const [value, setValue] = useState('smartphones');
  const [collapsed, setCollapsed] = useState(true);

  const dispatch = useDispatch();

  const {productsList = [], isLoading} =
    useSelector(state => state?.productsListReducer) ?? {};

  let products = [];

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    // const response = await getProductsList();

    //update it
    dispatch({
      type: 'GET_PRODUCT_LIST',
    });

    // setData(() => response.products || []);
  };

  const onPressData = ({id}) => {
    props.navigation.navigate('ProductDetails', {productId: id});
  };

  const renderProductItem = ({item}) => {
    products.push(item.title);
    if (value === item.category) {
      return <ProductItem item={item} onPressItem={() => onPressData(item)} />;
    } else {
      if (
        value === 'misc' &&
        (item.category === 'groceries' ||
          item.category === 'skincare' ||
          item.category === 'fragrances' ||
          item.category === 'home-decoration')
      ) {
        return (
          <ProductItem item={item} onPressItem={() => onPressData(item)} />
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.AppBar}>
        <Appbar.Content title="Products" />
        <Ionicons name="search" size={25} onPress={() => setCollapsed(!collapsed)} />
      </Appbar.Header>
      <Collapsible collapsed={collapsed}>
        <SearchableDropdown
          onTextChange={item => {
            for (let i = 0; i < products.length; i++) {
              if (item == products[i]) {
                alert(`It is the product ${i + 1}`);
                break;
              }
            }
          }}
          onItemSelect={item => alert(JSON.stringify(item))}
          containerStyle={styles.containerStyle}
          textInputStyle={styles.textInputStyle}
          itemStyle={styles.itemStyle}
          itemTextStyle={styles.itemTextStyle}
          itemsContainerStyle={styles.itemsContainerStyle}
          items={products}
          defaultIndex={2}
          placeholder="Search"
          resetValue={false}
          underlineColorAndroid="transparent"
        />
      </Collapsible>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {value: 'smartphones', label: 'Smartphones'},
          {value: 'laptops', label: 'Laptops'},
          {value: 'misc', label: 'Miscellaneous'},
        ]}
        style={styles.segmentedButton}
      />
      <FlatListComponent
        data={productsList}
        keyExtractor={({id}) => id}
        renderItem={renderProductItem}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      />
      <ActivityIndicator size="large" animating={isLoading} />
    </View>
  );
}
