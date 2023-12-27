import React from 'react';
import {FlatList} from 'react-native';

const FlatListComponent = props => {
  const {
    data = [],
    keyExtractor = () => {},
    renderItem = () => {},
  } = props ?? {};

  return (
    <FlatList data={data} keyExtractor={keyExtractor} renderItem={renderItem} />
  );
};

export default FlatListComponent;
