import React from 'react';

import { NavSection } from 'layouts/default/components';

const SidebarView: React.FC = () => {
  return (
    <NavSection title={`Справочники`} icon={`layers`}>
      Выберите один из справочников справа
    </NavSection>
  );
};

export default SidebarView;
