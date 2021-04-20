import { TFormFields, TFormField } from 'components/Form/types';

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

const email: TFormField<string> = {
  name: 'email',
  label: 'E-Mail',
  isRequired: true,
  attrs: {
    input: {
      placeholder: 'example@email.com',
    },
  },
};

const firstName: TFormField<string> = {
  name: 'firstName',
  label: 'Имя',
  isRequired: true,
  attrs: {
    input: {
      placeholder: 'Сергей',
    },
  },
};

const lastName: TFormField<string> = {
  name: 'lastName',
  label: 'Фамилия',
  isRequired: true,
  attrs: {
    input: {
      placeholder: 'Сергеев',
    },
  },
};

const secondName: TFormField<string> = {
  name: 'secondName',
  label: 'Отчество',
  attrs: {
    input: {
      placeholder: 'Сергеевич',
    },
  },
};

const phone: TFormField<string> = {
  name: 'phone',
  label: 'Телефон',
  attrs: {
    input: {
      placeholder: '+7-495-2230001',
    },
  },
};

const birthDate: TFormField<string> = {
  name: 'birthDate',
  label: 'Дата рождения',
  type: 'date',
  attrs: {
    wrapper: {
      variant: 'birthdate',
    },
  },
};

const roles: TFormField<string[]> = {
  name: 'roles',
  label: 'Группы пользователей, к которым принадлежит пользователь',
  type: 'roles',
};

const sites: TFormField<string[]> = {
  name: 'sites',
  label: 'Сайты, к которым пользователь имеет доступ',
  type: 'sites',
};

const fields: TFormFields = {
  isActive,
  email,
  firstName,
  lastName,
  secondName,
  phone,
  birthDate,
  roles,
  sites,
};

export default fields;
