import { TField } from 'modules/fields/config/types';

import { TInputProperty } from '../../types';

export type TPropertySelectProps = {
  field: TField;
  property: TInputProperty<string[]>;
};
