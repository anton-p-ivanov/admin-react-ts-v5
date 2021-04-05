import React, { useContext } from 'react';

import { TTrainingAnswer, TTrainingQuestion } from 'modules/training/config/types';
import { Context as QuestionContext } from 'modules/training/features/QuestionsModal';

type TUseHandlers<T> = {
  delete: (event: React.MouseEvent<T>) => void;
};

/**
 * useHandlers hook
 */
const useHandlers = <T>(answer?: TTrainingAnswer): TUseHandlers<T> => {
  const { state, update } = useContext(QuestionContext);
  const question = state.data as TTrainingQuestion;

  const deleteHandler = (event: React.MouseEvent<T>) => {
    event.preventDefault();

    if (answer) {
      const answers = question.answers.filter((item) => item.uuid !== answer.uuid);
      update({ ...state, data: { ...question, answers } });
    }
  };

  return {
    delete: deleteHandler,
  };
};

export default useHandlers;
