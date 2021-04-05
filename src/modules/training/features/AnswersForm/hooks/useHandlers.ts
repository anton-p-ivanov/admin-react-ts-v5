import React, { useContext } from 'react';

import { v4 } from 'uuid';

import { TTrainingQuestion } from 'modules/training/config/types';
import { Context as QuestionContext } from 'modules/training/features/QuestionsModal';

import Context from '../context';

type TUseHandlers<T> = {
  add: (event: React.MouseEvent<T>) => void;
};

/**
 * useHandlers hook
 */
const useHandlers = <T>(): TUseHandlers<T> => {
  const { state } = useContext(Context);
  const modal = useContext(QuestionContext);
  const question = modal.state.data as TTrainingQuestion;

  const addHandler = (event: React.MouseEvent<T>) => {
    event.preventDefault();

    const answers = question.answers;
    answers.push({
      uuid: v4().toString(),
      answer: state.answer,
      isValid: state.isValid,
      sort: 100,
    });

    modal.update({ ...modal.state, data: { ...question, answers } });
  };

  return {
    add: addHandler,
  };
};

export default useHandlers;
