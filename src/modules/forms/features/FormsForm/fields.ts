import { TFormField, TFormFields } from 'components/Form/types';

const isActive: TFormField<boolean> = {
  name: 'isActive',
  label: 'Активность',
  type: 'boolean',
  emptyValue: true,
  hint: 'Определяет возможность заполнения формы пользователями.',
  attrs: {
    input: {
      variant: 'inline',
    },
  },
};

const title: TFormField<string> = {
  name: 'title',
  label: 'Название',
  isRequired: true,
  hint: 'Не более 255 символов.',
};

const description: TFormField<string> = {
  name: 'description',
  type: 'textarea',
  label: 'Краткое описание',
  hint: 'Краткое описание может быть представлено в виде неформатированного текста или HTML-кода.',
};

const code: TFormField<string> = {
  name: 'code',
  label: 'Символьный код',
  isRequired: true,
  hint: 'Уникальный символьный код может содержать до 50 символов латинского алфавита, подчеркивания и цифр.',
};

const validFrom: TFormField<string> = {
  name: 'validFrom',
  type: 'dateTime',
  label: 'Активна с',
};

const validTo: TFormField<string> = {
  name: 'validTo',
  type: 'dateTime',
  label: 'Активна до',
};

const isTemplateActive: TFormField<boolean> = {
  name: 'isTemplateActive',
  label: 'Тип шаблона',
  type: 'boolean',
  emptyValue: false,
  attrs: {
    input: {
      variant: 'templates',
      choices: [
        { value: false, label: 'Шаблон веб-формы по-умолчанию' },
        { value: true, label: 'Свой шаблон веб-формы' },
      ],
    },
  },
};

const template: TFormField<string> = {
  name: 'template',
  type: 'textarea',
  label: 'Шаблон формы',
  hint: `
      Разрешено использовать разметку HTML. Коды полей формы должны быть заключены в двойные фигурные скобки, например
      {{FORM_FIELD_CODE}}. Код {{FORM_FIELD_AUTH}} зарезервирован для блока аутентификации пользователя, 
      а код {{FORM_FIELD_CAPTCHA}} для блока проверочного кода (captcha).
    `,
  attrs: {
    input: {
      size: 'large',
    },
  },
};

const roles: TFormField<string[]> = {
  name: 'roles',
  label: 'Группы пользователей, которым разрешено заполнение этой формы',
  type: 'roles',
};

const fields: TFormFields = {
  isActive,
  title,
  description,
  code,
  validFrom,
  validTo,
  isTemplateActive,
  template,
  roles,
};

export default fields;
