import Boolean from './Boolean';
import Checkbox from './Checkbox';
import Choices from './Choices';
import Date from './Date';
import DateTime from './DateTime';
import Number from './Number';
import Password from './Password';
import Roles from './Roles';
import Select from './Select';
import Sites from './Sites';
import Text from './Text';
import Textarea from './Textarea';
import Workflow from './Workflow';

export type TInputs = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const Inputs: TInputs = {
  Boolean,
  Checkbox,
  Choices,
  Date,
  DateTime,
  Number,
  Password,
  Roles,
  Sites,
  Select,
  Text,
  Textarea,
  Workflow,
};

export default Inputs;
