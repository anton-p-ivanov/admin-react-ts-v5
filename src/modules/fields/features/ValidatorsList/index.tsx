import React from 'react';

import DataView from 'features/DataView';
import { useModal } from 'features/ModalView';

import ValidatorsModal, { Context } from '../ValidatorsModal';
import { templates, columns } from './props';
import { TValidatorsListProps } from './types';

const ValidatorsList: React.FC<TValidatorsListProps> = ({ field }) => {
  const modal = useModal();

  return (
    <Context.Provider value={modal}>
      <DataView data={field.validators} columns={columns} templates={templates} variant={`field-validators`} />
      <ValidatorsModal field={field} />
    </Context.Provider>
  );
};

export default ValidatorsList;
