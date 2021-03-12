import { TDataViewRow } from 'features/DataView/types';
import { TStorageTree } from 'modules/storage/config/types';

export type TStorageListRowProps = TDataViewRow & {
  data: TStorageTree;
};
