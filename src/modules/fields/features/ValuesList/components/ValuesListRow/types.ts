import { TDataViewRow } from 'features/DataView/types';
import { TFieldValue } from 'modules/fields/config/types';

export type TValuesListRowProps = TDataViewRow & {
  data: TFieldValue;
};
