import React, { useState } from 'react';

import Context from './context';
import AnswersFormInputs from './form';
import { TAnswersFormState, INITIAL_STATE } from './types';

import './styles.scss';

const AnswersForm: React.FC = () => {
  const [state, setState] = useState<TAnswersFormState>(INITIAL_STATE);

  return (
    <Context.Provider value={{ state, setState }}>
      <AnswersFormInputs />
    </Context.Provider>
  );
};

export default AnswersForm;
