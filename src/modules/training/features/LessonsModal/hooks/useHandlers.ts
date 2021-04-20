import React, { useContext } from 'react';

import { TTrainingLesson } from 'modules/training/config/types';
import Store from 'store';
import API from 'utils/api';

import Context from '../context';

type TUseHandlers = {
  dismiss: (event: React.MouseEvent<HTMLButtonElement>) => void;
  confirm: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const useHandlers = (): TUseHandlers => {
  const modal = useContext(Context);
  const { formView } = useContext(Store);

  const dismissHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    modal.reset();
  };

  const confirmHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    API.request({
      method: 'POST',
      url: `/training/lessons/validate`,
      data: modal.state.data,
    })
      .then(onValidateSucceed)
      .catch(onValidatedFailed);
  };

  const onValidateSucceed = () => {
    const course = formView.state.data;
    const lessons = course.lessons as TTrainingLesson[];
    const lesson = modal.state.data as TTrainingLesson;

    const index = lessons.findIndex((item) => item.uuid === lesson.uuid);
    if (index > -1) {
      lessons[index] = lesson;
    } else {
      lessons.push(lesson);
    }

    formView.update({ ...formView.state, data: { ...course, fields: lessons } });
    modal.reset();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onValidatedFailed = (response: any) => {
    const errors = response.response ? response.response.data : {};
    modal.update({ ...modal.state, errors, isValid: false });
  };

  return {
    dismiss: dismissHandler,
    confirm: confirmHandler,
  };
};

export default useHandlers;
