import { TDataViewRow } from 'features/DataView/types';
import { TAccount } from 'modules/accounts/config/types';

export type TAccountsListRowProps = TDataViewRow & {
  data: TAccount;
};
