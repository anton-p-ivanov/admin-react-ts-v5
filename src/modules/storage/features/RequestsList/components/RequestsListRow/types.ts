import { TDataViewRow } from 'features/DataView/types';
import { TStorageRequest } from 'modules/storage/config/types';

export type TRequestsListRowProps = TDataViewRow & {
  data: TStorageRequest;
};
