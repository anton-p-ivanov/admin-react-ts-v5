import React, { useEffect, useState } from 'react';

import { NavItem, NavSection } from 'layouts/default/components';
import API, { TLookupResult } from 'utils/api';

const SidebarView: React.FC = () => {
  const [items, setItems] = useState<TLookupResult[]>([]);

  useEffect(() => {
    API.lookup(`/catalogs/types/lookup`).then((response) => {
      setItems(response);
    });
  }, []);

  return (
    <NavSection title={`Справочники`} icon={`layers`}>
      {items.map((item) => {
        return <NavItem key={item.value} path={`/catalogs/${item.value}/list`} title={item.label} />;
      })}
    </NavSection>
  );
};

export default SidebarView;
