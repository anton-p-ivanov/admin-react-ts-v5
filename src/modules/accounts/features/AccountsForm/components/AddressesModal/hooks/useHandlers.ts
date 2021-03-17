import React, { useContext } from 'react';

import { v4 } from 'uuid';

import { TAccount, TAddress } from 'modules/accounts/config/types';
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
    const addresses = account.addresses;
    const address = modal.state.data as TAddress;

    if (!address.uuid) {
      addresses.push({ ...address, uuid: v4() });
    } else {
      const index = addresses.findIndex((item: TAddress) => item.uuid === address.uuid);
      addresses[index] = address;
    }

    formView.update({ ...formView.state, data: { ...account, addresses } });

    modal.reset();
  };

  return {
    dismiss: dismissHandler,
    confirm: confirmHandler,
  };
};

export default useHandlers;
