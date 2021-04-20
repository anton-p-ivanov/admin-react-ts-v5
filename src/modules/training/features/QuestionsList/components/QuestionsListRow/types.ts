import { TDataViewRow } from 'features/DataView/types';
import { TTrainingQuestion } from 'modules/training/config/types';

export type TQuestionsListRowProps = TDataViewRow & {
  data: TTrainingQuestion;
};
