import React, {useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';

import InputComponents from '../../components/InputComponents';
import TouchableComponent from '../../components/TouchableComponent';
import {loginUser} from '../../services';
import {getUserInfo} from '../../redux/actions/UserInfoAction';
import styles from './styles';
import logo from '../../assets/logo.png';

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

const Login = props => {
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const dispatch = useDispatch();

  // Pass it as the second argument directly
  const userResponse = useSelector(state => state?.UserInfoReducer);

  const {error, userInfo = {}} = userResponse ?? {};
  const {message} = error ?? {};

  useEffect(() => {
    if (userResponse) {
      handleLoginResponse();
    }
  }, [userResponse]);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  const handleLoginResponse = () => {
    if (userInfo?.email) {
      return props.navigation.navigate('BottomTab');
    }
    if (error && message) {
      console.log(error, message);
      return Alert.alert(message);
    }
  };

  const onClickLogin = () => {
    //Username validation
    if (!username.length) {
      return Alert.alert('Please enter username');
    }

    //Password validation
    if (!password.length) {
      return Alert.alert('Please enter valid password');
    }

    return onLoginUser();
  };

  const onLoginUser = async () => {
    console.log(firebase.app());
    dispatch(getUserInfo({username, password}));

    //const {data = {}, message = ''} = await loginUser({username, password});

    // if (message) {
    //   return Alert.alert(message);
    // }
    //  dispatch(getProductList());
    // if (data?.email) {
    //   return
    // }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.textView}>
        <InputComponents
          placeholder="Username"
          value={username}
          onChangeText={uname => setUsername(uname)}
          style={styles.textInput}
        />

        <InputComponents
          placeholder="Password"
          value={password}
          onChangeText={pwd => setPassword(pwd)}
          style={styles.textInput}
          secureTextEntry={true}
        />

        <TouchableComponent onPress={onClickLogin} style={styles.loginButton}>
          <Text>Sign in</Text>
        </TouchableComponent>
      </View>

      <Text style={styles.signupText} onPress={onClickLogin}>
        Don't have an account? <Text style={styles.signUp}>Click here</Text>
      </Text>

      <View style={styles.floatingContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {}}
          style={styles.touchableOpacityStyle}>
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            // For local image
            //source={require('./images/float-add-icon.png')}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
