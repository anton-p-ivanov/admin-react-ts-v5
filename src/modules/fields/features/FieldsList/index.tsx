import React from 'react';

import DataView from 'features/DataView';
import { useModal } from 'features/ModalView';

import FieldsModal, { Context } from '../FieldsModal';
import { templates, columns } from './props';
import { TFieldsListProps } from './types';

const FieldsList: React.FC<TFieldsListProps> = ({ fields }) => {
  const modal = useModal();

  return (
    <Context.Provider value={modal}>
      <DataView data={fields} columns={columns} templates={templates} variant={`fields`} />
      <FieldsModal />
    </Context.Provider>
  );
};

export default FieldsList;
