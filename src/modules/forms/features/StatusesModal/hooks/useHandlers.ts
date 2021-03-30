import React, { useContext } from 'react';

import { TForm, TFormStatus } from 'modules/forms/config/types';
import Store from 'store';
import API from 'utils/api';

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

    API.request({
      method: 'POST',
      url: `/forms/statuses/validate`,
      data: modal.state.data,
    })
      .then(onValidateSucceed)
      .catch(onValidateFailed);
  };

  const onValidateSucceed = () => {
    const form = formView.state.data as TForm;
    const status = modal.state.data as TFormStatus;
    const statuses = form.statuses;

    const index = statuses.findIndex((item: TFormStatus) => item.uuid === status.uuid);
    if (index > -1) {
      statuses[index] = status;
    } else {
      statuses.push(status);
    }

    formView.update({ ...formView.state, data: { ...form, statuses } });
    modal.reset();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onValidateFailed = (response: any) => {
    const errors = response.response ? response.response.data : {};
    modal.update({ ...modal.state, errors, isValid: false });
  };

  return {
    dismiss: dismissHandler,
    confirm: confirmHandler,
  };
};

export default useHandlers;
