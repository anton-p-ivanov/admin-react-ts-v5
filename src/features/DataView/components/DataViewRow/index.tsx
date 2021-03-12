import React, { useContext } from 'react';

import { DataTable } from 'components';
import Context from 'store';

import { TDataViewRowProps } from './types';

const DataViewRow: React.FC<TDataViewRowProps> = (props) => {
  const { data, template: RowTemplate } = props;
  const { dataView } = useContext(Context);
  const { state, update } = dataView;

  const selected = state.selected;
  const isSelected = selected.some((s) => s === data.uuid);

  const setSelected = (value: string) => {
    return !selected.includes(value) ? [...selected, value] : selected.filter((v) => v !== value);
  };

  const onSelectHandler = (value: string): void => {
    update({ ...state, selected: setSelected(value) });
  };

  return (
    <DataTable.Row isDisabled={'isActive' in data && !data.isActive} isSelected={isSelected}>
      <RowTemplate data={data} isSelected={isSelected} onSelect={onSelectHandler} />
    </DataTable.Row>
  );
};

export default DataViewRow;
