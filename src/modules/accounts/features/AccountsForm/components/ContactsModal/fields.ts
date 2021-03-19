import { TFormField, TFormFields } from 'components/Form/types';
import { TUser } from 'modules/users/config/types';

import { getUsers } from './utils';

const user: TFormField<string> = {
  name: 'user',
  label: 'Пользователь',
  type: 'select',
  attrs: {
    input: {
      placeholder: '- Выберите пользователя -',
      optionsCallback: () =>
        getUsers().then((response) => {
          return response.data.map((item: TUser) => ({
            value: item.uuid,
            label: item.fullName,
          }));
        }),
    },
  },
};

const fullName: TFormField<string> = {
  name: 'fullName',
  label: 'ФИО',
  isRequired: true,
  attrs: {
    input: {
      placeholder: 'Иванов Иван Иванович',
    },
  },
};

const email: TFormField<string> = {
  name: 'email',
  label: 'E-Mail',
  isRequired: true,
  attrs: {
    input: {
      placeholder: 'ivanov.ivan@email.com',
    },
  },
};

const position: TFormField<string> = {
  name: 'position',
  label: 'Должность',
  attrs: {
    input: {
      placeholder: 'Менеджер отдела продаж',
    },
  },
};

const sort: TFormField<number> = {
  name: 'sort',
  type: 'number',
  label: 'Сортировка',
  emptyValue: 100,
  attrs: {
    wrapper: {
      variant: 'sort',
    },
  },
};

const fields: TFormFields = {
  user,
  fullName,
  email,
  position,
  sort,
};

export default fields;
