import { useContext } from 'react';

import { TFormFields } from 'components/Form/types';
import Store from 'store';

import { TReducerData } from '../store/types';

type TUseFieldsProps = (fields: TFormFields) => TFormFields;

/**
 * useFields hook
 */
const useFields: TUseFieldsProps = (fields) => {
  const { formView } = useContext(Store);
  const { state, update } = formView;

  Object.keys(fields).forEach((key) => {
    const field = fields[key];

    const extend = {
      value: state.data[field.name] || field.emptyValue,
      errors: state.errors ? state.errors[field.name] : [],
      onChange: (value: string | string[] | boolean) => {
        update({ ...state, data: { ...state.data, [field.name]: value } as TReducerData });
      },
    };

    fields[key] = { ...field, ...extend };
  });

  return fields;
};

export default useFields;
