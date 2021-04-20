import React, { useContext } from 'react';

import { Context as ConfirmContext } from 'features/ConfirmModal';
import { TAccount } from 'modules/accounts/config/types';
import Store from 'store';

type TUseHandlers<T> = {
  delete: (event: React.MouseEvent<T>) => void;
  refresh: (event: React.MouseEvent<T>) => void;
  search: (search: string) => void;
};

/**
 * useHandlers hook
 */
const useHandlers = <T>(account?: TAccount): TUseHandlers<T> => {
  const confirm = useContext(ConfirmContext);
  const { listView, dataView } = useContext(Store);
  const pagination = { ...listView.state.pagination, page: 1 };

  const _prevent = (event: React.MouseEvent<T>) => {
    event.preventDefault();
    return new Promise((resolve) => resolve());
  };

  const refreshHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => listView.refresh());
  };

  const deleteHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      confirm.update({
        ...confirm.state,
        isVisible: true,
        data: {
          endpoint: `DELETE:/accounts`,
          onSuccess: listView.refresh,
          data: {
            items: account ? [account.uuid] : dataView.state.selected['accounts'],
          },
        },
      });
    });
  };

  const searchHandler = (search: string) => {
    listView.update({ ...listView.state, search, pagination });
  };

  return {
    delete: deleteHandler,
    refresh: refreshHandler,
    search: searchHandler,
  };
};

export default useHandlers;
