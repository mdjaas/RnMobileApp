import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageHeading: {
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 10,
    marginLeft:10,
  },

  coverPage: {
    borderBottomColor: 'black',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 50,
    elevation: 2,
  },

  image: {
    width: 120,
    height: 120,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 20,
  },

  profileName: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  profileInfoHeading: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  profileInfoView: {
    flex: 0.6,
  },

  profileInfo: {
    fontSize: 25,
  },

  name: {
    marginTop: 10,
    fontSize: 25,
    marginRight: 10,
  },

  editProfile: {
    flex: 0.1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    marginTop: 20,
  },
});

export default styles;
