import React, { useEffect, useContext } from 'react';

import Store from 'store';

import { DataViewItems } from './components';
import { TDataViewProps } from './types';

import './styles.scss';

const DataView: React.FC<TDataViewProps> = (props) => {
  const { data = [], templates, columns, variant = 'default' } = props;
  const { dataView } = useContext(Store);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dataView.update({ ...dataView.state, data }), [data]);

  return (
    <div className={`data-view data-view--${variant}`}>
      {templates.toolbar && <templates.toolbar isRowsSelected={dataView.state.selected.length > 0} />}
      <DataViewItems row={templates.row} columns={columns} />
    </div>
  );
};

export default DataView;
