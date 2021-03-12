import React from 'react';
import { Route } from 'react-router-dom';

import routes from 'config/routes';
import { TRoute } from 'config/types';

import { NavSection } from '../';
import { TSidebarSectionProps } from './types';

const SidebarSection: React.FC<TSidebarSectionProps> = (props) => {
  const { item } = props;
  const route = routes.find((route) => route.id === item.id) as TRoute;

  return (
    <Route key={item.id} path={route.path}>
      <NavSection title={route.title} icon={item.icon} items={item.items} />
    </Route>
  );
};

export default SidebarSection;
