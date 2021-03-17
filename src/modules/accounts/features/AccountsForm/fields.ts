import { TChoices } from 'components/Form/components/FormInput/components/Choices/types';
import { TSelectOptions } from 'components/Form/components/FormInput/components/Select/types';
import { TFormField, TFormFields } from 'components/Form/types';
import API from 'utils/api';

const isActive: TFormField<boolean> = {
  name: 'isActive',
  label: 'Активность',
  type: 'boolean',
  emptyValue: true,
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
  attrs: {
    input: {
      placeholder: 'ЗАО "Экзампл Компани"',
    },
  },
};

const email: TFormField<string> = {
  name: 'email',
  label: 'E-Mail',
  isRequired: true,
  attrs: {
    input: {
      placeholder: 'info@example-company.com',
    },
  },
};

const web: TFormField<string> = {
  name: 'web',
  label: 'Веб-сайт',
  isRequired: true,
  attrs: {
    input: {
      placeholder: 'https://www.example-company.org',
    },
  },
};

const phone: TFormField<string> = {
  name: 'phone',
  label: 'Телефон',
  attrs: {
    input: {
      placeholder: '+1-123-1234567',
    },
  },
};

const parent: TFormField<string> = {
  name: 'parent',
  label: 'Головная компания',
  type: 'select',
  attrs: {
    input: {
      placeholder: '- Выберите значение -',
      optionsCallback: (): Promise<TSelectOptions> => {
        return API.lookup(`/accounts/lookup`);
      },
    },
  },
};

const types: TFormField<string[]> = {
  name: 'types',
  label: 'Типы контрагента',
  type: 'choices',
  isRequired: true,
  attrs: {
    input: {
      isMultiple: true,
      choicesCallback: (): Promise<TChoices> => {
        return API.lookup(`/accounts/types/lookup`);
      },
    },
  },
};

const description: TFormField<string> = {
  name: 'description',
  label: 'Краткое описание',
  type: 'textarea',
};

const content: TFormField<string> = {
  name: 'content',
  label: 'Подробная информация',
  type: 'textarea',
  attrs: {
    input: {
      size: 'large',
    },
  },
};

const fields: TFormFields = {
  isActive,
  title,
  email,
  web,
  phone,
  parent,
  types,
  description,
  content,
};

export default fields;
