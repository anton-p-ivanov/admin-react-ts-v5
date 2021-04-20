import React, { useContext } from 'react';

import { TTrainingCourse } from 'modules/training/config/types';
import LessonsList from 'modules/training/features/LessonsList';
import Context from 'store';

const LessonsTab: React.FC = () => {
  const { formView } = useContext(Context);
  const course = formView.state.data as TTrainingCourse;

  return (
    <>
      <h2>Список уроков</h2>
      <LessonsList lessons={course.lessons} />
    </>
  );
};

export default LessonsTab;
