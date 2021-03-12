import React, { useState } from 'react';

import { TabsGroup, TabsItem } from './components';
import Context from './context';
import { TTabsProps, TTabsState } from './types';
import Utils from './utils';

import './styles.scss';

/**
 * Tabs component
 * @constructor
 */
const Tabs: React.FC<TTabsProps> = (props) => {
  const { items, disabled = [], invalid = [] } = props;
  const [state, setState] = useState<TTabsState>({
    activeTab: Utils.getFirstTab(items),
  });

  const TabPane = state.activeTab && state.activeTab.component;

  let modifiedItems = items;
  modifiedItems = Utils.setDisabledState(modifiedItems, disabled);
  modifiedItems = Utils.setInvalidState(modifiedItems, invalid);

  return (
    <div className="tabs">
      <Context.Provider value={{ state, setState }}>
        <div className="tabs__nav">
          <div className="tabs-nav">
            {modifiedItems.map((item) => {
              const Component = item.items ? TabsGroup : TabsItem;
              return <Component item={item} key={item.id} />;
            })}
          </div>
        </div>
        <div className="tabs__content">
          <div className="tabs__pane">{TabPane && <TabPane />}</div>
        </div>
      </Context.Provider>
    </div>
  );
};

export default Tabs;
