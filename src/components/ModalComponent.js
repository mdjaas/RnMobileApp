import React from 'react';
import {Modal} from 'react-native';

const ModalComponent = props => {
  const {visible = false, style = {}, transparent = false} = props ?? {};

  return (
    <Modal
      animationType="slide"
      visible={visible}
      style={style}
      transparent={transparent}>
      {props?.children}
    </Modal>
  );
};

export default ModalComponent;
