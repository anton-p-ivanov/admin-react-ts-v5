import React, { useContext } from 'react';

import { TAccount, TAccountManager } from 'modules/accounts/config/types';
import Store from 'store';

type TUseHandlers<T> = {
  delete: (event: React.MouseEvent<T>) => void;
};

/**
 * useHandlers hook
 */
const useHandlers = <T>(data: TAccountManager): TUseHandlers<T> => {
  const { formView } = useContext(Store);

  const deleteHandler = (event: React.MouseEvent<T>) => {
    event.preventDefault();

    const account = formView.state.data as TAccount;
    const managers = account.managers.filter((item) => item !== data.uuid);

    formView.update({ ...formView.state, data: { ...account, managers } });
  };

  return {
    delete: deleteHandler,
  };
};

export default useHandlers;
