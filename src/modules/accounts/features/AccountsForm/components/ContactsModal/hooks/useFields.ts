import { useContext, useEffect, useRef } from 'react';

import { TFormFields } from 'components/Form/types';
import { TAccountContact } from 'modules/accounts/config/types';

import Modal from '../context';
import fields from '../fields';
import { getUserDetails } from '../utils';

/**
 * useFields hook
 */
const useFields = (): TFormFields => {
  const ref = useRef<HTMLInputElement>(null);
  const { state, update } = useContext(Modal);
  const contact = state.data as TAccountContact;

  const setDisabled = (key: string): boolean => {
    return ['fullName', 'email'].indexOf(key) !== -1 && typeof contact.user !== 'undefined' && contact.user.length > 0;
  };

  useEffect(() => {
    if (contact.user) {
      getUserDetails(contact.user).then((user) => {
        const data = {
          ...contact,
          email: user.email,
          fullName: user.fullName,
          position: user.account?.position,
        };

        update({ ...state, data });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contact.user]);

  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    const extend = {
      value: state.data ? state.data[field.name] || field.emptyValue : '',
      errors: state.errors[field.name],
      isDisabled: setDisabled(field.name),
      onChange: (value: string) => {
        update({ ...state, data: { ...contact, [field.name]: value } });
      },
    };

    fields[key] = { ...field, ...extend };
  });

  // Set reference to input
  fields.user.ref = ref;

  // Set focus on password field on visible
  useEffect(() => {
    if (state.isVisible && ref.current) {
      ref.current.focus();
    }
  }, [state.isVisible]);

  return fields;
};

export default useFields;
