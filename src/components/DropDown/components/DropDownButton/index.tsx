import React from 'react';

import { TDropDownButtonProps } from './types';

const DropDownButton: React.FC<TDropDownButtonProps> = (props) => {
  const { onClick, isDisabled = false, children } = props;

  return (
    <button className="dropdown__item dropdown__item--link" disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default DropDownButton;
