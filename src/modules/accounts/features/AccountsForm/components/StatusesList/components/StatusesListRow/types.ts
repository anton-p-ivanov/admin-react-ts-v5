import { TDataViewRow } from 'features/DataView/types';
import { TAccountStatus } from 'modules/accounts/config/types';

export type TStatusesListRowProps = TDataViewRow & {
  data: TAccountStatus;
};
