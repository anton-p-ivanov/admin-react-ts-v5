import React from 'react';

import Icon from 'components/Icon';

import { TDataSort, TDataSortProps } from './types';
import './styles.scss';

const dataSortProps = (name: string, sort: TDataSort) => {
  let icon = 'menu';
  let handler = () => sort.handler(name);

  switch (sort.field) {
    case name:
      icon = 'chevron-up';
      handler = () => sort.handler(`-${name}`);
      break;
    case `-${name}`:
      icon = 'chevron-down';
      handler = () => sort.handler();
      break;
    default:
      break;
  }

  return { icon, handler };
};

const DataSort: React.FC<TDataSortProps> = ({ name, sort, children }) => {
  const { icon, handler } = dataSortProps(name, sort);
  return (
    <div className="data-sort">
      <div className="data-sort__icon">
        <Icon name={icon} variant="xs" />
      </div>
      <button type="button" className="data-sort__toggle" onClick={handler}>
        {children}
      </button>
    </div>
  );
};

export default DataSort;
