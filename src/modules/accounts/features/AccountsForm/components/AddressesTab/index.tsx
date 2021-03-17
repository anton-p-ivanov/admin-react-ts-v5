import React, { useContext } from 'react';

import { TAccount } from 'modules/accounts/config/types';
import Context from 'store';

import AddressesList from '../AddressesList';

const AddressesTab: React.FC = () => {
  const { formView } = useContext(Context);
  const account = formView.state.data as TAccount;

  return (
    <>
      <h2>Адресная информация</h2>
      <AddressesList addresses={account.addresses} />
    </>
  );
};

export default AddressesTab;
