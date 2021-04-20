import React, { useContext, useState } from 'react';

import { Button, Form } from 'components';
import { TAccount } from 'modules/accounts/config/types';
import Store from 'store';

import Context from '../ManagersTab/context';
import './styles.scss';

const ManagersForm: React.FC = () => {
  const [manager, setManager] = useState<string>();
  const { formView } = useContext(Store);
  const users = useContext(Context);
  const options = users.map((o) => ({
    value: o.uuid,
    label: o.fullName,
  }));

  const select = (value: string) => setManager(value);
  const assign = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const account = formView.state.data as TAccount;
    const managers = [...account.managers, manager].filter((item, index, array) => array.indexOf(item) === index);
    const data = { ...account, managers };

    formView.update({ ...formView.state, data });
  };

  return (
    <div className={`managers-form`}>
      <Form.Input.Select
        name="managers"
        value={manager}
        onChange={select}
        options={options}
        placeholder={`- Выберите менеджера -`}
      />
      <Button type={`button`} isDisabled={!manager} onClick={assign}>
        Назначить
      </Button>
    </div>
  );
};

export default ManagersForm;
