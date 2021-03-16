import { useContext, useEffect, useState } from 'react';

import { TFormFields } from 'components/Form/types';
import { TUser } from 'modules/users/config/types';
import Store from 'store';
import API, { TLookupResult } from 'utils/api';

import fields from '../fields';

/**
 * useFields hook
 */
const useFields = (): TFormFields => {
  const [options, setOptions] = useState<TLookupResult[]>([]);
  const { formView } = useContext(Store);
  const user = formView.state.data as TUser;

  useEffect(() => {
    API.lookup(`/accounts/lookup`).then((response) => setOptions(response));
  }, []);

  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    const extend = {
      value: user.account ? user.account[field.name] : field.emptyValue,
      isDisabled: key === 'position' && (!user.account || !user.account.account),
      onChange: (value: string) => {
        const account = field.name === 'account' && !value ? null : { ...user.account, [field.name]: value };
        formView.update({ ...formView.state, data: { ...user, account } });
      },
    };

    fields[key] = { ...field, ...extend };
  });

  fields.account.attrs = {
    input: {
      options,
      placeholder: '- Не выбрано -',
    },
  };

  return fields;
};

export default useFields;
