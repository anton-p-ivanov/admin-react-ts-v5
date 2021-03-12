import React from 'react';

import Utils from 'utils';

import { TButtonProps } from './types';
import './styles.scss';

const Button: React.FC<TButtonProps> = (props) => {
  const {
    type = 'button',
    isDisabled = false,
    isIcon = false,
    variant = 'default',
    size = 'normal',
    onClick,
    children,
  } = props;

  const className = Utils.className({
    [`btn`]: true,
    [`btn--disabled`]: isDisabled,
    [`btn--icon`]: isIcon,
    [`btn--${variant}`]: variant,
    [`btn--${size}`]: size,
  });

  return (
    <button type={type} className={className} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
