import React from 'react';

import { Icon, Nav } from 'components';
import routes from 'config/routes';

import { NavItem } from '../../components';
import { TNavSectionProps } from './types';
import './styles.scss';

/**
 * Application section navigation component.
 *
 * @param props
 * @constructor
 */
const NavSection: React.FC<TNavSectionProps> = (props) => {
  const { title, icon = 'menu', items = [] } = props;

  return (
    <Nav variant="section">
      <div className="nav__title">
        <div className="nav-title">
          <div className="nav-title__icon">
            <Icon name={icon} />
          </div>
          <div className="nav-title__label">{title}</div>
        </div>
      </div>
      {items.map((group, index) => {
        return (
          <div className="nav__group" key={index}>
            {group.map((item) => {
              const route = routes.find((r) => r.id === item);
              return route && <NavItem key={item} path={route.path} title={route.title} />;
            })}
          </div>
        );
      })}
    </Nav>
  );
};

export default NavSection;
