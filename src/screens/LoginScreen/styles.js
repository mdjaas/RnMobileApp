import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    width: 100,
    height: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center',
  },

  textView: {
    flex: 1,
  },

  textInput: {
    marginTop: '5%',
    fontSize: 20,
    width: '80%',
    borderWidth: StyleSheet.hairlineWidth,
    alignSelf: 'center',
  },

  button: {
    backgroundColor: 'green',
    marginTop: '10%',
    marginLeft: '50%',
  },

  loginButton: {
    backgroundColor: 'green',
    marginTop: '5%',
    width: '80%',
    height: '20%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    borderRadius: 25,
  },

  signupText: {
    // alignSelf: 'end',
    fontSize: 20,
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },

  signUp: {
    color: 'green',
  },

  floatingContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});

export default styles;
