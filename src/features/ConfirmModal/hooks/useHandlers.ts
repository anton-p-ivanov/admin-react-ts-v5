import React, { useContext } from 'react';

import { Method } from 'axios';

import API from 'utils/api';

import Context from '../context';
import { TConfirmData, TUseHandlers } from '../types';

const useHandlers = (): TUseHandlers => {
  const confirm = useContext(Context);

  const dismissHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    confirm.reset();
  };

  const confirmHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = confirm.state.data as TConfirmData;
    const [method, url] = data.endpoint.split(':');

    API.request({ method: method as Method, url, data: { ...data.data, password: data.password } })
      .then((response) => {
        confirm.reset();
        data.onSuccess && data.onSuccess(response.data);
      })
      .catch(() => confirm.update({ ...confirm.state, isValid: false }));
  };

  return {
    dismiss: dismissHandler,
    confirm: confirmHandler,
  };
};

export default useHandlers;
