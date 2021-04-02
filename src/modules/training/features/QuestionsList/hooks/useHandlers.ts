import React, { useContext } from 'react';

import { TTrainingQuestion } from 'modules/training/config/types';
import Store from 'store';

import { Context as LessonContext } from '../../LessonsModal';
import { Context as QuestionContext, defaults } from '../../QuestionsModal';

type TUseHandlers<T> = {
  create: (event: React.MouseEvent<T>) => void;
  edit: (event: React.MouseEvent<T>) => void;
  copy: (event: React.MouseEvent<T>) => void;
  delete: (event: React.MouseEvent<T>) => void;
  refresh: (event: React.MouseEvent<T>) => void;
};

/**
 * useHandlers hook
 */
const useHandlers = <T>(question?: TTrainingQuestion): TUseHandlers<T> => {
  const lessonModal = useContext(LessonContext);
  const questionModal = useContext(QuestionContext);
  const { dataView } = useContext(Store);

  const _prevent = (event: React.MouseEvent<T>) => {
    event.preventDefault();
    return new Promise((resolve) => resolve());
  };

  const refreshHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => dataView.update({ ...dataView.state, _timestamp: new Date().getTime() }));
  };

  const editHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      question && questionModal.update({ ...questionModal.state, isVisible: true, data: question });
    });
  };

  const copyHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      question && questionModal.update({ ...questionModal.state, isVisible: true, data: { ...question, uuid: '' } });
    });
  };

  const deleteHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      const data = lessonModal.state.data as { questions: TTrainingQuestion[] };
      const selected = question ? [question.uuid] : dataView.state.selected['training-questions-list'] || [];
      const questions = data.questions.filter((item) => !selected.includes(item.uuid));

      lessonModal.update({ ...lessonModal.state, data: { ...data, questions } });
    });
  };

  const createHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => questionModal.update({ ...questionModal.state, isVisible: true, data: defaults }));
  };

  return {
    create: createHandler,
    edit: editHandler,
    copy: copyHandler,
    delete: deleteHandler,
    refresh: refreshHandler,
  };
};

export default useHandlers;
