import { TFormFields } from 'components/Form/types';
import { TMailTemplate } from 'config/types';

import { fields } from '../fields';
import { TMailViewReducer } from '../types';

/**
 * useFields hook
 */
const useFields = (reducer: TMailViewReducer, defaults?: Record<string, unknown>): TFormFields => {
  const { state, update } = reducer;

  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    const form = state.data as TMailTemplate;
    const defaultValue = defaults && defaults[field.name] ? defaults[field.name] : '';

    const extend = {
      value: form && form[field.name] ? form[field.name] : defaultValue,
      errors: state.errors[`mailTemplate.${field.name}`],
      onChange: (value: string) => {
        update({ ...state, data: { ...form, [field.name]: value } });
      },
    };

    fields[key] = { ...field, ...extend };
  });

  return fields;
};

export default useFields;
