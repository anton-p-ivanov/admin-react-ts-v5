import React from 'react';

import DataView from 'features/DataView';
import { useModal } from 'features/ModalView';

import ValuesModal, { Context } from '../ValuesModal';
import { templates, columns } from './props';
import { TValuesListProps } from './types';

const ValuesList: React.FC<TValuesListProps> = ({ field }) => {
  const modal = useModal();

  return (
    <Context.Provider value={modal}>
      <DataView data={field.values} columns={columns} templates={templates} variant={`field-values`} />
      <ValuesModal field={field} />
    </Context.Provider>
  );
};

export default ValuesList;
