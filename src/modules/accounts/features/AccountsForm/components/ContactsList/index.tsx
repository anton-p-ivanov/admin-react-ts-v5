import React from 'react';

import DataView from 'features/DataView';
import { useModal } from 'features/ModalView';

import ContactsModal, { Context } from '../ContactsModal';
import * as props from './props';
import { TContactsListProps } from './types';

const ContactsList: React.FC<TContactsListProps> = ({ contacts }) => {
  const contact = useModal();

  return (
    <Context.Provider value={contact}>
      <p>Список контактных лиц контрагента, с которыми вёдется взаимодействие по партнёрству</p>
      <DataView data={contacts} columns={props.columns} templates={props.templates} variant={`account-contacts`} />
      <ContactsModal />
    </Context.Provider>
  );
};

export default ContactsList;
