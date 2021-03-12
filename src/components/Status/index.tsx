import React from 'react';

import Utils from 'utils';

import { TStatusProps } from './types';
import './styles.scss';

const Status: React.FC<TStatusProps> = (props) => {
  const { isActive = false, isAnimated = false, variant = 'default', children } = props;

  const className = Utils.className({
    [`status`]: true,
    [`status--${variant}`]: !!variant,
    [`status--active`]: isActive,
    [`status--animated`]: isAnimated,
  });

  return <div className={className}>{children}</div>;
};

export default Status;
