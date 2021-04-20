import React, { useContext } from 'react';

import Store from 'store';
import API from 'utils/api';

import Context from '../context';
import { TUseHandlers } from '../types';

const useHandlers = (): TUseHandlers => {
  const modal = useContext(Context);
  const { listView } = useContext(Store);

  const dismissHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    modal.reset();
  };

  const confirmHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const data = modal.state.data;

    if (data) {
      const method = data.uuid ? 'PUT' : 'POST';
      const url = data.uuid ? `/catalogs/types/${data.uuid}` : `/catalogs/types`;

      API.request({ method, url, data })
        .then(() => {
          listView.refresh();
          modal.reset();
        })
        .catch((errors) => {
          modal.update({ ...modal.state, isValid: false, errors: errors.response });
        });
    }
  };

  return {
    dismiss: dismissHandler,
    confirm: confirmHandler,
  };
};

export default useHandlers;
