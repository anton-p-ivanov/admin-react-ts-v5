import React, { useContext } from 'react';

import { TAccount } from 'modules/accounts/config/types';
import Store from 'store';

import ContactsList from '../ContactsList';

const ContactsTab: React.FC = () => {
  const { formView } = useContext(Store);
  const account = formView.state.data as TAccount;

  return (
    <>
      <h2>Контактные лица</h2>
      <ContactsList contacts={account.contacts} />
    </>
  );
};

export default ContactsTab;
