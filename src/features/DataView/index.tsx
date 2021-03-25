import React, { useEffect, useContext } from 'react';

import hash from 'object-hash';

import Store from 'store';

import { DataViewItems } from './components';
import { TDataViewProps } from './types';

import './styles.scss';

const DataView: React.FC<TDataViewProps> = (props) => {
  const { data = [], templates, columns, variant = 'default' } = props;
  const { dataView } = useContext(Store);
  const { state, update } = dataView;

  const deps = hash({ variant, data });
  const selected = state.selected[variant] || [];

  useEffect(() => {
    update({ ...state, data: { ...state.data, [variant]: data } });

    return () => {
      update({ ...state, data: { ...state.data, [variant]: [] } });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]);

  return (
    <div className={`data-view data-view--${variant}`}>
      {templates.toolbar && <templates.toolbar isRowsSelected={selected.length > 0} />}
      <DataViewItems variant={variant} row={templates.row} columns={columns} />
    </div>
  );
};

export default DataView;
