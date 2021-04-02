import React, { useContext } from 'react';

import { TTrainingLesson, TTrainingQuestion } from 'modules/training/config/types';
import API from 'utils/api';

import { Context as LessonContext } from '../../LessonsModal';
import QuestionContext from '../context';

type TUseHandlers = {
  dismiss: (event: React.MouseEvent<HTMLButtonElement>) => void;
  confirm: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const useHandlers = (): TUseHandlers => {
  const questionModal = useContext(QuestionContext);
  const lessonModal = useContext(LessonContext);

  const dismissHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    questionModal.reset();
  };

  const confirmHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    API.request({
      method: 'POST',
      url: `/training/questions/validate`,
      data: questionModal.state.data,
    })
      .then(onValidateSucceed)
      .catch(onValidatedFailed);
  };

  const onValidateSucceed = () => {
    const lesson = lessonModal.state.data as TTrainingLesson;
    const questions = lesson.questions;
    const question = questionModal.state.data as TTrainingQuestion;

    const index = questions.findIndex((item) => item.uuid === question.uuid);
    if (index > -1) {
      questions[index] = question;
    } else {
      questions.push(question);
    }

    lessonModal.update({ ...lessonModal.state, data: { ...lesson, questions } });
    questionModal.reset();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onValidatedFailed = (response: any) => {
    const errors = response.response ? response.response.data : {};
    questionModal.update({ ...questionModal.state, errors, isValid: false });
  };

  return {
    dismiss: dismissHandler,
    confirm: confirmHandler,
  };
};

export default useHandlers;
