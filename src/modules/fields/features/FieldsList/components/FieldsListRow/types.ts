import { TDataViewRow } from 'features/DataView/types';
import { TField } from 'modules/fields/config/types';

export type TFieldsListRowProps = TDataViewRow & {
  data: TField;
};
