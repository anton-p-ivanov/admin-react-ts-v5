import React from 'react';

import TabsItem from '../TabsItem';
import { TTabsGroupProps } from './types';

const TabsGroup: React.FC<TTabsGroupProps> = (props) => {
  const { label, items = [] } = props.item;
  return (
    <div className="tabs-nav__group">
      <div className="tabs-nav__title">{label}</div>
      {items.map((item) => (
        <TabsItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default TabsGroup;
