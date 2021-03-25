import React from 'react';

import { NavSection } from 'layouts/default/components';
import Nav from 'layouts/default/nav';

const SidebarView: React.FC = () => {
  const items = Nav.find((item) => item.id === 'admin');

  return <NavSection title={`Панель управления`} icon={`settings`} items={items ? items.items : []} />;
};

export default SidebarView;
