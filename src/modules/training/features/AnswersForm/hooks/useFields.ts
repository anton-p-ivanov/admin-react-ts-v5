import { useContext } from 'react';

import { TFormFields } from 'components/Form/types';

import Context from '../context';
import { fields } from '../fields';

/**
 * useFields hook
 */
const useFields = (): TFormFields => {
  const { state, setState } = useContext(Context);
  fields.answer = {
    ...fields.answer,
    value: state.answer,
    onChange: (answer: string) => setState({ ...state, answer }),
  };

  fields.isValid = {
    ...fields.isValid,
    value: true,
    attrs: {
      input: {
        isSelected: state.isValid,
        onSelect: () => setState({ ...state, isValid: !state.isValid }),
      },
    },
  };

  return fields;
};

export default useFields;
