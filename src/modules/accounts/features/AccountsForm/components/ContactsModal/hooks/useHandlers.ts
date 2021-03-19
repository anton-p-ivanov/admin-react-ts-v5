import React, { useContext } from 'react';

// import { v4 } from 'uuid';

import { TAccount, TAccountContact } from 'modules/accounts/config/types';
import Store from 'store';

import Context from '../context';
import { TUseHandlers } from '../types';

/**
 * useHandlers hook
 */
const useHandlers = (): TUseHandlers => {
  const modal = useContext(Context);
  const { formView } = useContext(Store);

  const dismissHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    modal.reset();
  };

  const confirmHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const account = formView.state.data as TAccount;
    const contacts = account.contacts;
    const contact = modal.state.data as TAccountContact;

    const index = contacts.findIndex((item: TAccountContact) => item.email === contact.email);
    index === -1 ? contacts.push({ ...contact }) : (contacts[index] = contact);

    formView.update({ ...formView.state, data: { ...account, contacts } });
    modal.reset();
  };

  return {
    dismiss: dismissHandler,
    confirm: confirmHandler,
  };
};

export default useHandlers;
