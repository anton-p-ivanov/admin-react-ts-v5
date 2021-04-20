import React from 'react';

import { Form } from 'components';

import useFields from './hooks/useFields';

const AccountTab: React.FC = () => {
  const fields = useFields();

  return (
    <>
      <h2>Информация о компании</h2>
      <Form.Group>
        <Form.Field field={fields.account} />
        <Form.Field field={fields.position} />
      </Form.Group>
    </>
  );
};

export default AccountTab;
