import { TDataViewRow } from 'features/DataView/types';
import { TUser } from 'modules/users/config/types';

export type TUsersListRowProps = TDataViewRow & {
  data: TUser;
};
