import { TDataViewRow } from 'features/DataView/types';
import { TFormStatus } from 'modules/forms/config/types';

export type TStatusesListRowProps = TDataViewRow & {
  data: TFormStatus;
};
