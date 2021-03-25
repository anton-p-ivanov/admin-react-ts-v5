import React, { useContext } from 'react';

import { TField } from 'modules/fields/config/types';

import FieldContext from '../../FieldsModal/context';
import ValueContext from '../context';

type TUseHandlers = {
  dismiss: (event: React.MouseEvent<HTMLButtonElement>) => void;
  confirm: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const useHandlers = (field: TField): TUseHandlers => {
  const modal = useContext(ValueContext);
  const { state, update } = useContext(FieldContext);

  const dismissHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    modal.reset();
  };

  const confirmHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const values = [...field.values, modal.state.data];
    update({ ...state, data: { ...field, values } });

    modal.reset();
  };

  return {
    dismiss: dismissHandler,
    confirm: confirmHandler,
  };
};

export default useHandlers;
