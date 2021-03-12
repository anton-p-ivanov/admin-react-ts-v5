import React from 'react';

import Utils from 'utils';

import { TModal } from './types';
import './styles.scss';

const Modal: React.FC<TModal> = (props) => {
  const { size = 'default', variant = 'default', isVisible = false, name = 'default', children } = props;
  const className = Utils.className({
    [`modal__dialog`]: true,
    [`modal__dialog--${name}`]: true,
    [`modal__dialog--${size}`]: !!size,
    [`modal__dialog--${variant}`]: !!variant,
  });

  return (
    <div className={`modal modal--${isVisible ? 'visible' : 'hidden'}`}>
      <div className={className}>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
