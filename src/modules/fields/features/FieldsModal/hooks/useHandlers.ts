import React, { useContext } from 'react';

import { TField } from 'modules/fields/config/types';
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
    const form = formView.state.data;
    const fields = form.fields as TField[];
    const field = modal.state.data as TField;

    // validate field before state update
    API.request({ method: 'POST', url: `/fields/validate`, data: field })
      .then(() => {
        const index = fields.findIndex((item: TField) => item.code === field.code);
        if (index > -1) {
          fields[index] = field;
        } else {
          fields.push(field);
        }
        formView.update({ ...formView.state, data: { ...form, fields } });
        modal.reset();
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((response: any) => {
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
