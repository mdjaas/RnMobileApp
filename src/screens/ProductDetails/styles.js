import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  productDetails: {
    flex: 0.8,
  },

  productTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'green',
  },

  productHeading: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  productResp: {
    fontSize: 20,
  },

  content: {
    marginTop: '5%',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: '30%',
    alignSelf: 'center',
    marginTop: '10%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
  },

  buyButtonContainer: {flex: 0.2, justifyContent: 'flex-end'},

  buyButton: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
  },

  buyModal: {
    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    elevation: 5,
    borderRadius: 15,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  buyModalCenter: {
    marginTop: '50%',
  },

  purchaseConfirm: {
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    borderRadius: 25,
    padding: 8,
  },

  purchaseConfirmText: {
    fontSize: 20,
    marginTop: '10%',
    marginBottom: '20%',
  },

  purchaseCancel: {
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 25,
    padding: 8,
    marginTop: 10,
  },

  orderProcess: {
    fontSize: 20,
    marginTop: '10%',
    marginBottom: '20%',
    color: 'green',
  },
});

export default styles;
