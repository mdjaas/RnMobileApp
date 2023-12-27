import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Divider} from 'react-native-paper';

import ImageComponent from '../../components/ImageComponent';
import styles from './styles';
import TouchableComponent from '../../components/TouchableComponent';

const ProfileScreen = props => {
  const userResponse = useSelector(state => state?.UserInfoReducer);
  const {userInfo = {}} = userResponse ?? {};
  const dispatch = useDispatch();
  const onSignOut = () => {
    dispatch({type: 'CLEAR_USER_INFO'});
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.coverPage}>
        <Text style={styles.pageHeading}>Profile</Text>
        <ImageComponent uri={userInfo.image} style={styles.image} />
        <View style={styles.profileName}>
          <Text style={styles.name}>{userInfo.firstName}</Text>
          <Text style={styles.name}>{userInfo.lastName}</Text>
        </View>
      </View>
      <View style={styles.profileInfoView}>
        <Text style={styles.profileInfoHeading}> Username </Text>
        <Text style={styles.profileInfo}> {userInfo.username}</Text>
        <Divider />
        <Text style={styles.profileInfoHeading}> Email</Text>
        <Text style={styles.profileInfo}> {userInfo.email}</Text>
        <Divider />
        <Text style={styles.profileInfoHeading}> Gender</Text>
        <Text style={styles.profileInfo}> {userInfo.gender}</Text>
        <Divider />
      </View>
      <TouchableComponent style={styles.editProfile}>
        <Text>Edit Profile</Text>
      </TouchableComponent>
      <TouchableComponent style={styles.editProfile} onPress={onSignOut}>
        <Text>Sign Out</Text>
      </TouchableComponent>
    </View>
  );
};

export default ProfileScreen;
