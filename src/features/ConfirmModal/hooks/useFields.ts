import { useContext, useEffect, useRef } from 'react';

import { TFormField, TFormFields } from 'components/Form/types';

import Modal from '../context';

/**
 * useFields hook
 */
const useFields = (): TFormFields => {
  const ref = useRef<HTMLInputElement>(null);
  const { state, update } = useContext(Modal);

  const password: TFormField<string> = {
    ref,
    name: 'password',
    label: 'Введите пароль для подтверждения действия',
    type: 'password',
    value: state.data && (state.data.password as string),
    errors: [],
    onChange: (value: string) => {
      update({ ...state, data: { ...state.data, password: value } });
    },
  };

  // Set focus on password field on visible
  useEffect(() => {
    if (state.isVisible && ref.current) {
      update({ ...state, data: { ...state.data, password: 'P@ssw0rd' } });
      ref.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isVisible]);

  return { password };
};

export default useFields;
