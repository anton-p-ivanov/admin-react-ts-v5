import { TDataViewRow } from 'features/DataView/types';
import { TFieldValidator } from 'modules/fields/config/types';

export type TValidatorsListRowProps = TDataViewRow & {
  data: TFieldValidator;
};
