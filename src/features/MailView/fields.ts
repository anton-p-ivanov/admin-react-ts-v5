import { TFormField, TFormFields } from 'components/Form/types';

const sender: TFormField<string> = {
  name: 'sender',
  label: 'Отправитель',
  attrs: {
    input: {
      placeholder: `John Smith <john.smith@example.com>`,
    },
  },
};

const recipient: TFormField<string> = {
  name: 'recipient',
  label: 'Получатель',
  hint: 'Допускается ввод нескольких адресов через разделитель',
  isRequired: true,
  attrs: {
    input: {
      placeholder: `John Smith <john.smith@example.com>`,
    },
  },
};

const replyTo: TFormField<string> = {
  name: 'replyTo',
  label: 'Обратный адрес',
  hint: 'Допускается ввод нескольких адресов через разделитель',
  attrs: {
    input: {
      placeholder: `John Smith <john.smith@example.com>`,
    },
  },
};

const copyTo: TFormField<string> = {
  name: 'copyTo',
  label: 'Копия',
  hint: 'Допускается ввод нескольких адресов через разделитель',
  attrs: {
    input: {
      placeholder: `John Smith <john.smith@example.com>`,
    },
  },
};

const subject: TFormField<string> = {
  name: 'subject',
  label: 'Тема почтового сообщения',
  isRequired: true,
};

const html: TFormField<string> = {
  name: 'html',
  type: 'textarea',
  label: 'Код HTML-шаблона',
  attrs: {
    input: {
      size: 'large',
    },
  },
};

const text: TFormField<string> = {
  name: 'text',
  type: 'textarea',
  label: 'Код текстового шаблона',
  attrs: {
    input: {
      size: 'large',
    },
  },
};

const fields: TFormFields = {
  sender,
  recipient,
  replyTo,
  copyTo,
  subject,
  html,
  text,
};

export { fields };
