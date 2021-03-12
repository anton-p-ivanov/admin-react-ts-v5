import React from 'react';
import { NavLink } from 'react-router-dom';

import { Nav } from 'components';

import { TBreadcrumbsProps } from './types';
import './styles.scss';

/**
 * NavBreadcrumbs component.
 *
 * @param items
 * @constructor
 */
const Breadcrumbs: React.FC<TBreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <Nav variant="breadcrumbs">
      <NavLink to={`/`} key={`home`} className="nav__link">
        Главная
      </NavLink>
      {breadcrumbs.map((item) =>
        item.url ? (
          <NavLink to={item.url} key={item.url} className="nav__link">
            {item.title}
          </NavLink>
        ) : (
          item.title
        ),
      )}
    </Nav>
  );
};

export default Breadcrumbs;
