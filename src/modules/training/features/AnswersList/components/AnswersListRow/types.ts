import { TDataViewRow } from 'features/DataView/types';
import { TTrainingAnswer } from 'modules/training/config/types';

export type TAnswersListRowProps = TDataViewRow & {
  data: TTrainingAnswer;
};
