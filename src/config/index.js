import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

Reactotron.configure({name: 'RnDemo'})
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .use(sagaPlugin())
  .use(reactotronRedux())
  .connect();

export default Reactotron;
