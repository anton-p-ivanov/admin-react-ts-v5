/* eslint-disable @typescript-eslint/no-explicit-any */
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
  hint: 'Не более 250 символов.',
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
  hint: 'Уникальный символьный код может содержать до 250 символов латинского алфавита, подчеркивания и цифр.',
};

const isTrading: TFormField<boolean> = {
  name: 'isTrading',
  label: 'Торговый каталог',
  hint: 'Определяет возможность определения цен для элементов каталога',
  type: 'boolean',
  emptyValue: false,
  attrs: {
    input: {
      variant: 'inline',
    },
  },
};

const isIndexed: TFormField<boolean> = {
  name: 'isIndexed',
  label: 'Включать в поисковый индекс',
  hint: 'Определяет возможность индексирования элементов каталога для поиска',
  type: 'boolean',
  emptyValue: false,
  attrs: {
    input: {
      variant: 'inline',
    },
  },
};

const type: TFormField<string> = {
  name: 'type',
  label: 'Тип справочника',
  isRequired: true,
  type: 'select',
  attrs: {
    input: {
      placeholder: '- Выберите тип справочника -',
      optionsCallback: (): Promise<any> => {
        return API.lookup(`/catalogs/types/lookup`);
      },
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

const sites: TFormField<string[]> = {
  name: 'sites',
  label: '',
  type: 'sites',
};

const fields: TFormFields = {
  isActive,
  isTrading,
  isIndexed,
  title,
  description,
  code,
  type,
  sort,
  sites,
};

export default fields;
