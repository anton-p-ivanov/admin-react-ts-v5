import React, { useContext } from 'react';

import { TField } from 'modules/fields/config/types';

import FieldContext from '../../FieldsModal/context';
import ValidatorContext from '../context';

type TUseHandlers = {
  dismiss: (event: React.MouseEvent<HTMLButtonElement>) => void;
  confirm: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const useHandlers = (field: TField): TUseHandlers => {
  const modal = useContext(ValidatorContext);
  const { state, update } = useContext(FieldContext);

  const dismissHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    modal.reset();
  };

  const confirmHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const validators = [...field.validators, modal.state.data];
    update({ ...state, data: { ...field, validators } });

    modal.reset();
  };

  return {
    dismiss: dismissHandler,
    confirm: confirmHandler,
  };
};

export default useHandlers;
