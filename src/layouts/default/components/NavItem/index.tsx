import React from 'react';
import { NavLink } from 'react-router-dom';

import { TNavItemProps } from './types';

const NavItem: React.FC<TNavItemProps> = ({ path, title }) => {
  return (
    <NavLink to={path} className="nav__item nav__link">
      {title}
    </NavLink>
  );
};

export default NavItem;
