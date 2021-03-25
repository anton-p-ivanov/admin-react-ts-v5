import { useContext, useEffect, useRef } from 'react';

import { TFormFields } from 'components/Form/types';
import { TField } from 'modules/fields/config/types';

import Modal from '../context';
import fields from '../fields';

/**
 * useFields hook
 */
const useFields = (): TFormFields => {
  const ref = useRef<HTMLInputElement>(null);
  const { state, update } = useContext(Modal);
  const form = state.data as TField;

  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    const extend = {
      value: state.data ? state.data[field.name] || field.emptyValue : '',
      errors: state.errors[field.name],
      isDisabled: field.name === 'isMultiple' && typeof form !== 'undefined' && ['C', 'D'].indexOf(form.type) === -1,
      onChange: (value: string) => {
        update({ ...state, data: { ...form, [field.name]: value } });
      },
    };

    fields[key] = { ...field, ...extend };
  });

  // Set reference to input
  fields.label.ref = ref;

  // Set focus on password field on visible
  useEffect(() => {
    if (state.isVisible && ref.current) {
      ref.current.focus();
    }
  }, [state.isVisible]);

  return fields;
};

export default useFields;
