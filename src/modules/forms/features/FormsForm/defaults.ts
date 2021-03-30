import { defaults } from 'features/MailView';
import { TForm } from 'modules/forms/config/types';

const form: TForm = {
  title: '',
  description: '',
  code: '',
  isActive: true,
  isTemplateActive: false,
  template: '',
  validFrom: '',
  validTo: '',
  fields: [],
  statuses: [],
  sort: 100,
  mailTemplate: { ...defaults, subject: 'Новый почтовый шаблон веб-формы' },
};

export default form;
