import { TDataViewRow } from 'features/DataView/types';
import { TStorageVersion } from 'modules/storage/config/types';

export type TVersionsListRowProps = TDataViewRow & {
  data: TStorageVersion;
};
