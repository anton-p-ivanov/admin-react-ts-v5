import { TField } from 'modules/fields/config/types';

import { TInputProperty } from '../../types';

export type TPropertyTextProps = {
  field: TField;
  property: TInputProperty<string>;
};
