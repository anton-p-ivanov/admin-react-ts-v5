import { TMailTemplate } from 'config/types';

const defaults: TMailTemplate = {
  html: '',
  recipient: '',
  sender: '',
  subject: 'Новый почтовый шаблон',
  text: '',
};

export { defaults };
