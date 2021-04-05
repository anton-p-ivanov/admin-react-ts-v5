import { TDataViewRow } from 'features/DataView/types';
import { TTrainingLesson } from 'modules/training/config/types';

export type TLessonsListRowProps = TDataViewRow & {
  data: TTrainingLesson;
};
