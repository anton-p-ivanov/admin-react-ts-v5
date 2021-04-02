import React, { useContext } from 'react';

import { TTrainingLesson } from 'modules/training/config/types';
import { Context } from 'modules/training/features/LessonsModal';
import QuestionsList from 'modules/training/features/QuestionsList';

const QuestionsTab: React.FC = () => {
  const { state } = useContext(Context);
  const lesson = state.data as TTrainingLesson;

  return (
    <>
      <h2>Список вопросов</h2>
      <QuestionsList questions={lesson ? lesson.questions : []} />
    </>
  );
};

export default QuestionsTab;
