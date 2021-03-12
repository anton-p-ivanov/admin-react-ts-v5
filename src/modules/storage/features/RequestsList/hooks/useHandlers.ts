import React, { useContext } from 'react';

import { Context as ConfirmContext } from 'features/ConfirmModal';
import { TStorageRequest } from 'modules/storage/config/types';
import Store from 'store';

type TUseHandlers<T> = {
  refresh: (event: React.MouseEvent<T>) => void;
  grant: (event: React.MouseEvent<T>) => void;
  withdraw: (event: React.MouseEvent<T>) => void;
};

/**
 * useHandlers hook
 */
const useHandlers = <T>(request?: TStorageRequest): TUseHandlers<T> => {
  const { listView } = useContext(Store);
  const confirm = useContext(ConfirmContext);

  const _prevent = (event: React.MouseEvent<T>) => {
    event.preventDefault();
    return new Promise((resolve) => resolve());
  };

  const refreshHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => listView.refresh());
  };

  const grantHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => request && _confirmAndProcess('PUT', request));
  };

  const withdrawHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => request && _confirmAndProcess('DELETE', request));
  };

  const _confirmAndProcess = (method: string, request: TStorageRequest) => {
    const data = {
      endpoint: `${method}:/storage/${request.storage.uuid}/requests/${request.user.uuid}`,
      onSuccess: () => listView.refresh(),
    };

    confirm.update({ ...confirm.state, isVisible: true, data });
  };

  return {
    refresh: refreshHandler,
    grant: grantHandler,
    withdraw: withdrawHandler,
  };
};

export default useHandlers;
