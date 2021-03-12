import React from 'react';

import { DataFilter, DataSearch } from './components';
import { TDataToolbarProps } from './types';

import './styles.scss';

type TDataToolbar = React.FC<TDataToolbarProps> & {
  Filter: typeof DataFilter;
  Search: typeof DataSearch;
};

const DataToolbar: TDataToolbar = (props) => {
  const { total = 0, search, filter, children } = props;

  return (
    <div className="data-toolbar">
      {children}
      <div className="data-toolbar__space" />
      <div className="data-toolbar__group data-toolbar__group--total">Всего найдено: {total}</div>
      {search && <div className="data-toolbar__group">{search}</div>}
      {filter && <div className="data-toolbar__group">{filter}</div>}
    </div>
  );
};

DataToolbar.Filter = DataFilter;
DataToolbar.Search = DataSearch;

export default DataToolbar;
