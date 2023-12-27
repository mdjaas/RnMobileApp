import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Appbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import ImageComponent from '../../components/ImageComponent';
import InputComponents from '../../components/InputComponents';
import FlatListComponent from '../../components/FlatListComponent';
import PostsComponent from '../../components/PostsComponent';
import {getPosts} from '../../services';
import styles from './styles';

const UserPosts = props => {
  // const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();
  const {posts = []} = useSelector(state => state?.postsReducer) ?? {};

  useEffect(() => {
    getUserPosts();
  }, []);

  const getUserPosts = async () => {
    // const response = await getPosts();
    // setPosts(() => response.posts || []);
    dispatch({
      type: 'GET_POSTS',
    });
  };

  const renderPosts = ({item}) => {
    return <PostsComponent item={item} />;
  };

  return (
    <View>
      <Appbar.Header style={styles.AppBar}>
        <Appbar.Content title="Posts" />
      </Appbar.Header>
      <FlatListComponent
        data={posts}
        keyExtractor={({id}) => id}
        renderItem={renderPosts}
      />
    </View>
  );
};

export default UserPosts;
