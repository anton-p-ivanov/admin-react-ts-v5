import { TFormField, TFormFields } from 'components/Form/types';

import { types } from '../AddressesTab/types';

const type: TFormField<string> = {
  name: 'type',
  label: 'Тип',
  isRequired: true,
  type: 'select',
  attrs: {
    input: {
      placeholder: '- Выберите тип -',
      options: types,
    },
  },
};

const country: TFormField<string> = {
  name: 'country',
  label: 'Страна',
  isRequired: true,
  type: 'select',
  attrs: {
    input: {
      placeholder: '- Выберите страну -',
      options: [{ value: 'RU', label: 'Россия' }],
    },
  },
};

const zip: TFormField<string> = {
  name: 'zip',
  label: 'Почтовый индекс',
  isRequired: true,
};

const region: TFormField<string> = {
  name: 'region',
  label: 'Регион/область',
};

const city: TFormField<string> = {
  name: 'city',
  label: 'Город',
  isRequired: true,
};

const street: TFormField<string> = {
  name: 'street',
  label: 'Улица, дом',
  isRequired: true,
};

const fields: TFormFields = {
  type,
  country,
  zip,
  region,
  city,
  street,
};

export default fields;
