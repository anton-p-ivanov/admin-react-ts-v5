import { TDataViewRow } from 'features/DataView/types';
import { TTrainingCourse } from 'modules/training/config/types';

export type TCoursesListRowProps = TDataViewRow & {
  data: TTrainingCourse;
};
