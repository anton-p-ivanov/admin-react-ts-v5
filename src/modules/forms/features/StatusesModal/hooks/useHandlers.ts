import React, { useContext } from 'react';

import { TForm } from 'modules/forms/config/types';
import Store from 'store';

import Context from '../context';

type TUseHandlers = {
  dismiss: (event: React.MouseEvent<HTMLButtonElement>) => void;
  confirm: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const useHandlers = (): TUseHandlers => {
  const modal = useContext(Context);
  const { formView } = useContext(Store);

  const dismissHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    modal.reset();
  };

  const confirmHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const form = formView.state.data as TForm;
    const statuses = [...form.statuses, modal.state.data];

    formView.update({ ...formView.state, data: { ...form, statuses } });

    modal.reset();
  };

  return {
    dismiss: dismissHandler,
    confirm: confirmHandler,
  };
};

export default useHandlers;
