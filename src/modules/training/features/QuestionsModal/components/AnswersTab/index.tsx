import React, { useContext } from 'react';

import { TTrainingQuestion } from 'modules/training/config/types';
import AnswersList from 'modules/training/features/AnswersList';
import { Context } from 'modules/training/features/QuestionsModal';

const AnswersTab: React.FC = () => {
  const { state } = useContext(Context);
  const question = state.data as TTrainingQuestion;

  return (
    <>
      <h2>Варианты ответов</h2>
      <AnswersList answers={question ? question.answers : []} />
    </>
  );
};

export default AnswersTab;
