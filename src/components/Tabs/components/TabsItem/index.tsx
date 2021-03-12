import React, { useContext } from 'react';

import Utils from 'utils';

import Context from '../../context';
import { TTabsContext } from '../../types';
import { TTabsItemProps } from './types';

/**
 * TabsItem
 * @param props
 * @constructor
 */
const TabsItem: React.FC<TTabsItemProps> = (props) => {
  const { item } = props;
  const { state, setState } = useContext<TTabsContext>(Context);

  const className = Utils.className({
    'tabs-nav__item': true,
    'tabs-nav__item--active': state.activeTab !== null && state.activeTab.id === item.id,
    'tabs-nav__item--disabled': !!item.isDisabled,
    'tabs-nav__item--invalid': item.isValid === false,
  });

  const onClickHandler = () => {
    setState({ ...state, activeTab: item });
  };

  if (item.isDisabled) {
    return <span className={className}>{item.label}</span>;
  }

  return (
    <div className={className} onClick={onClickHandler}>
      {item.label}
    </div>
  );
};

export default TabsItem;
