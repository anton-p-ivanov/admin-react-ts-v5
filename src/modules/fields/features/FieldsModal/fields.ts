import { TFormField, TFormFields } from 'components/Form/types';
import { types } from 'modules/fields/config/constants';

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

const label: TFormField<string> = {
  name: 'label',
  label: 'Название',
  isRequired: true,
};

const description: TFormField<string> = {
  name: 'description',
  type: 'textarea',
  label: '',
  attrs: {
    input: {
      size: 'large',
    },
  },
};

const code: TFormField<string> = {
  name: 'code',
  label: 'Символьный код',
  hint: 'Не более 50 символов латинского алфавита, подчеркивания и цифр',
  isRequired: true,
};

const type: TFormField<number> = {
  name: 'type',
  type: 'select',
  label: 'Тип поля',
  isRequired: true,
  attrs: {
    input: {
      placeholder: '- Выберите тип поля -',
      options: types,
    },
  },
};

const isMultiple: TFormField<boolean> = {
  name: 'isMultiple',
  label: 'Множественное',
  hint: 'Возможность принимать несколько значений',
  type: 'boolean',
  emptyValue: false,
  attrs: {
    input: {
      variant: 'inline',
    },
  },
};

const defaultValue: TFormField<string> = {
  name: 'default',
  label: 'По-умолчанию',
  hint: 'Значение поля по-умолчанию (если другое значение не было введено)',
};

const options: TFormField<string> = {
  name: 'options',
  label: 'Дополнительные опции',
  hint: 'Дополнительные HTML-атрибуты в JSON-формате: {"readonly":1,"title":"Sample"}',
  type: 'textarea',
  attrs: {
    input: {
      size: 'small',
    },
  },
};

const sort: TFormField<number> = {
  name: 'sort',
  type: 'number',
  label: 'Сортировка',
  attrs: {
    input: {
      min: 0,
      step: 10,
    },
    wrapper: {
      variant: 'sort',
    },
  },
};

const fields: TFormFields = {
  isActive,
  isMultiple,
  code,
  label,
  description,
  type,
  defaultValue,
  options,
  sort,
};

export default fields;
