import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},

  AppBar: {backgroundColor: 'orange', height: 55, fontWeight: 'bold'},

  contentContainer: {flexGrow: 1},
  viewButton: {
    alignItems: 'center',
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 8,
  },

  containerStyle: {padding: 5},

  textInputStyle: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#FAF7F6',
  },

  itemStyle: {
    padding: 10,
    marginTop: 2,
    backgroundColor: '#FAF9F8',
    borderColor: '#bbb',
    borderWidth: 1,
  },

  itemTextStyle: {
    color: '#222',
  },

  itemsContainerStyle: {
    maxHeight: '50%',
  },

  segmentedButton: {
    marginTop: 10,
  },
});

export default styles;
