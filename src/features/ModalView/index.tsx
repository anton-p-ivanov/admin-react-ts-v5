import React from 'react';

import { Modal } from 'components';

import useModal from './request';
import { TModalViewProps } from './types';

/**
 * ModalView component
 * @constructor
 */
const ModalView: React.FC<TModalViewProps> = (props) => {
  const { name = 'modal', isVisible = false, variant, children } = props;

  return (
    <Modal isVisible={isVisible} variant={variant} name={name}>
      {children}
    </Modal>
  );
};

export { useModal };

export default ModalView;
