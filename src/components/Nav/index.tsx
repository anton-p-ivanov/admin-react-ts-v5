import React from 'react';

import Utils from 'utils';

import { TNavProps } from './types';
import './styles.scss';

/**
 * Navigation wrapper
 *
 * @param variant
 * @param children
 * @constructor
 */
const Nav: React.FC<TNavProps> = ({ variant, children }) => {
  const className = Utils.className({
    nav: true,
    [`nav--${variant}`]: !!variant,
  });

  return <nav className={className}>{children}</nav>;
};

export default Nav;
