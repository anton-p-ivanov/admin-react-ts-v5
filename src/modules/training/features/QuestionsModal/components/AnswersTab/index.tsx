import React, { useContext } from 'react';

import { TTrainingQuestion } from 'modules/training/config/types';
import AnswersForm from 'modules/training/features/AnswersForm';
import AnswersList from 'modules/training/features/AnswersList';
import { Context } from 'modules/training/features/QuestionsModal';

const AnswersTab: React.FC = () => {
  const { state } = useContext(Context);
  const question = state.data as TTrainingQuestion;

  return (
    <>
      <h2>Варианты ответов</h2>
      <AnswersForm />
      <br />
      <AnswersList answers={question ? question.answers : []} />
    </>
  );
};

export default AnswersTab;
