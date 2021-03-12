import React, { useContext } from 'react';

import { TStorageVersion } from 'modules/storage/config/types';
import Store from 'store';
import API from 'utils/api';

import Context from '../context';
import { TUseHandlers } from '../types';

const useHandlers = (): TUseHandlers => {
  const { listView } = useContext(Store);
  const modal = useContext(Context);
  const data = modal.state.data as TStorageVersion;

  const dismissHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    modal.reset();
  };

  const confirmHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    API.request({ method: 'PUT', url: `/storage/versions/${data.uuid}`, data })
      .then(() => {
        modal.reset();
        listView.refresh();
      })
      .catch((response) => {
        const errors = response.response ? response.response.data : {};
        modal.update({ ...modal.state, errors, isValid: false });
      });
  };

  return {
    dismiss: dismissHandler,
    confirm: confirmHandler,
  };
};

export default useHandlers;
