import React, { useContext } from 'react';

import { TAccount, TAccountStatus } from 'modules/accounts/config/types';
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
    const status = modal.state.data as TAccountStatus;
    const statuses = account.statuses;

    statuses.push({ ...status });

    formView.update({ ...formView.state, data: { ...account, statuses } });

    modal.reset();
  };

  return {
    dismiss: dismissHandler,
    confirm: confirmHandler,
  };
};

export default useHandlers;
