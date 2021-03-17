import React from 'react';

import DataView from 'features/DataView';
import { useModal } from 'features/ModalView';

import AddressesModal, { Context } from '../AddressesModal';
import * as props from './props';
import { TAddressesListProps } from './types';

import './styles.scss';

const AddressesList: React.FC<TAddressesListProps> = ({ addresses }) => {
  const address = useModal();

  return (
    <Context.Provider value={address}>
      <DataView data={addresses} columns={props.columns} templates={props.templates} variant={`addresses`} />
      <AddressesModal />
    </Context.Provider>
  );
};

export default AddressesList;
