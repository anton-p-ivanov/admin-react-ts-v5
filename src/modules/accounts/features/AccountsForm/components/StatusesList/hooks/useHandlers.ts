import React, { useContext } from 'react';

import { TAccount, TAccountStatus } from 'modules/accounts/config/types';
import Store from 'store';

import { Context } from '../../StatusesModal';

type TUseHandlers<T> = {
  create: (event: React.MouseEvent<T>) => void;
  delete: (event: React.MouseEvent<T>) => void;
  refresh: (event: React.MouseEvent<T>) => void;
};

/**
 * useHandlers hook
 */
const useHandlers = <T>(status?: TAccountStatus): TUseHandlers<T> => {
  const modal = useContext(Context);
  const { dataView, formView } = useContext(Store);

  const _prevent = (event: React.MouseEvent<T>) => {
    event.preventDefault();
    return new Promise((resolve) => resolve());
  };

  const refreshHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => dataView.update({ ...dataView.state, _timestamp: new Date().getTime() }));
  };

  const deleteHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      const account = formView.state.data as TAccount;
      const statuses = account.statuses.filter((item) => item.status !== status?.status);
      const data = { ...formView.state.data, statuses };
      formView.update({ ...formView.state, data });
    });
  };

  const createHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => modal.update({ ...modal.state, isVisible: true }));
  };

  return {
    create: createHandler,
    delete: deleteHandler,
    refresh: refreshHandler,
  };
};

export default useHandlers;
