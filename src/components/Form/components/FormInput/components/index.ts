import Checkbox from './Checkbox';
import Choices from './Choices';
import Password from './Password';
import Roles from './Roles';
import Select from './Select';
import Text from './Text';
import Textarea from './Textarea';
import Workflow from './Workflow';

export type TInputs = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const Inputs: TInputs = {
  Checkbox,
  Choices,
  Password,
  Roles,
  Select,
  Text,
  Textarea,
  Workflow,
};

export default Inputs;
