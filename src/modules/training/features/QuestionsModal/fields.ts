import { TFormField, TFormFields } from 'components/Form/types';

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
  label: 'Вопрос',
  hint: 'Не более 250 символов.',
  isRequired: true,
};

const description: TFormField<string> = {
  name: 'description',
  type: 'textarea',
  label: 'Краткое описание',
  hint: 'Опишите кратко содержание вопроса.',
};

const type: TFormField<string> = {
  name: 'type',
  type: 'select',
  label: 'Тип ответа',
  attrs: {
    input: {
      placeholder: '- Выберите тип -',
      options: [
        { value: 'S', label: 'Одиночный выбор' },
        { value: 'M', label: 'Множественный выбор' },
        { value: 'T', label: 'Текстовый ответ' },
      ],
    },
  },
};

const sort: TFormField<number> = {
  name: 'sort',
  type: 'number',
  label: 'Сортировка',
  emptyValue: 100,
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

const value: TFormField<number> = {
  name: 'value',
  type: 'number',
  label: 'Баллы',
  hint: 'Количество баллов за правильный ответ.',
  emptyValue: 10,
  attrs: {
    input: {
      min: 0,
      step: 10,
    },
    wrapper: {
      variant: 'value',
    },
  },
};

const fields: TFormFields = {
  title,
  description,
  isActive,
  type,
  sort,
  value,
};

export { fields };
