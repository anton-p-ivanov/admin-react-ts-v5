import Choices from './PropertyChoices';
import Select from './PropertySelect';
import Text from './PropertyText';
import Textarea from './PropertyTextarea';

export type TProperties = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const Properties: TProperties = {
  Textarea,
  Text,
  Choices,
  Select,
};

export default Properties;
