import { TDataViewRow } from 'features/DataView/types';
import { TAccountManager } from 'modules/accounts/config/types';

export type TStatusesListRowProps = TDataViewRow & {
  data: TAccountManager;
};
