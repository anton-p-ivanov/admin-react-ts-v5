import React from 'react';
import * as Router from 'react-router-dom';

import routes from 'config/routes';

import { NavRoot, ContentView, SidebarSection } from './components';
import nav from './nav';

import './styles.scss';

const Layout: React.FC = () => {
  return (
    <Router.BrowserRouter>
      <div className="layout">
        <div className="layout__sidebar">
          <div className="sidebar">
            <div className="sidebar__global">
              <NavRoot items={nav} />
            </div>
            <div className="sidebar__section">
              <Router.Switch>
                {nav.map((item) => (
                  <SidebarSection item={item} key={item.id} />
                ))}
              </Router.Switch>
            </div>
          </div>
        </div>
        <div className="layout__content">
          <Router.Switch>
            {routes.map((route) => (
              <Router.Route key={route.id} path={route.path} exact>
                <ContentView route={route} key={route.id} />
              </Router.Route>
            ))}
          </Router.Switch>
        </div>
      </div>
    </Router.BrowserRouter>
  );
};

export default Layout;
