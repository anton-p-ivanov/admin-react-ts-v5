import React, { useContext } from 'react';

import DataTable from 'components/DataTable';
import { TDataColumn } from 'components/DataTable/types';
import Context from 'store';

import { DataViewEmpty, DataViewRow } from '../';
import { TDataViewItemsProps } from './types';

const DataViewItems: React.FC<TDataViewItemsProps> = (props) => {
  const { variant, row, columns } = props;
  const { dataView } = useContext(Context);
  const { state, update } = dataView;

  const data = state.data[variant] || [];
  const selected = state.selected[variant] || [];

  const onSelect = (): void => {
    const s = selected.length < data.length ? data.map((i) => i.uuid) : [];
    update({ ...state, selected: { ...state.selected, [variant]: s } });
  };

  const columnsMapper = (column: TDataColumn) => {
    if (column.type === 'selector') {
      const isSelected = data.length > 0 && selected.length === data.length;
      return { ...column, isSelected, onSelect };
    }

    return { ...column };
  };

  return (
    <DataTable columns={columns.map(columnsMapper)}>
      {data.length === 0 && <DataViewEmpty columns={columns} />}
      {data.map((item, index) => (
        <DataViewRow variant={variant} data={item} template={row} key={`row-${index}`} />
      ))}
    </DataTable>
  );
};

export default DataViewItems;
