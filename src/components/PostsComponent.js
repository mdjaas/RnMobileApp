import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ImageComponent from './ImageComponent';

const PostsComponent = ({item}) => {
  return (
    <View
      style={{
        flex: 1,
        width: '90%',
        flexDirection: 'column',
        padding: 10,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'grey',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 10,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 19,
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          marginTop: 20,
          fontSize: 17,
        }}>
        {item.body}
      </Text>
      <Text
        style={{
          color: 'blue',
          fontSize: 17,
          marginTop: 10,
        }}>{`#${item.tags}`}</Text>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderWidth: StyleSheet.hairlineWidth,
          padding: 5,
        }}>
        <Text
          style={{
            fontSize: 17,
            justifyContent: 'space-around',
          }}>
          <Ionicons name="thumbs-up-outline" size={20} />
          Like
        </Text>
        <Text
          style={{
            fontSize: 17,
            justifyContent: 'space-around',
          }}>
          <Ionicons name="share-social-outline" size={20} />
          Share
        </Text>
        <Text
          style={{
            fontSize: 17,
            justifyContent: 'space-around',
          }}>
          <Ionicons name="send-outline" size={20} />
          Comment
        </Text>
      </View>
    </View>
  );
};

export default PostsComponent;
