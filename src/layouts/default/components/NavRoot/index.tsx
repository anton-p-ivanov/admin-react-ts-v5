import React from 'react';
import { NavLink } from 'react-router-dom';

import { Icon, Nav } from 'components';
import routes from 'config/routes';

import { TNavRootProps } from './types';
import './styles.scss';

/**
 * Layout root navigation component.
 *
 * @param items
 * @constructor
 */
const NavRoot: React.FC<TNavRootProps> = ({ items }) => {
  return (
    <Nav variant={`root`}>
      {items.map((item) => {
        const route = routes.find((r) => r.id === item.id);
        return (
          route && (
            <NavLink to={route.path} key={item.id} className="nav__item nav__link">
              {item.icon && <Icon name={item.icon} />}
            </NavLink>
          )
        );
      })}
    </Nav>
  );
};

export default NavRoot;
