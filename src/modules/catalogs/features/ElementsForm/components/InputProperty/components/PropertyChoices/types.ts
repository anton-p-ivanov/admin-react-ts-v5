import { TField } from 'modules/fields/config/types';

import { TInputProperty } from '../../types';

export type TPropertyChoicesProps = {
  field: TField;
  property: TInputProperty<string[]>;
};
