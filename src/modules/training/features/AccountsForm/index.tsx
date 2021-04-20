import React, { useContext, useState } from 'react';

import { Button, Form } from 'components';
import { TFormField } from 'components/Form/types';
import { TTrainingCourse } from 'modules/training/config/types';
import Context from 'store';

import { TAccountsFormProps } from './types';

import './styles.scss';

const AccountsForm: React.FC<TAccountsFormProps> = ({ accounts }) => {
  const [account, setAccount] = useState<string>('');
  const { formView } = useContext(Context);
  const course = formView.state.data as TTrainingCourse;

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const accounts = [...course.accounts, account];
    formView.update({ ...formView.state, data: { ...course, accounts } });
  };

  const field: TFormField<string> = {
    name: 'accounts',
    type: 'select',
    label: '',
    value: account,
    onChange: (value: string) => setAccount(value),
    attrs: {
      input: {
        placeholder: `- Выберите аккаунт -`,
        options: accounts,
      },
    },
  };

  return (
    <div className={`training-course-accounts-form`}>
      <Form.Input field={field} />
      <Button type={`button`} isDisabled={!account} onClick={onClick}>
        Добавить
      </Button>
    </div>
  );
};

export default AccountsForm;
