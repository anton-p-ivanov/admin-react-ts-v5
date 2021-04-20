import { TDataViewRow } from 'features/DataView/types';
import { TForm } from 'modules/forms/config/types';

export type TFormsListRowProps = TDataViewRow & {
  data: TForm;
};
