import React from 'react';

import { Form } from 'components';

import { useFields } from '../../hooks';

const DescriptionTab: React.FC = () => {
  const fields = useFields();

  return (
    <>
      <h2>Описание поля</h2>
      <Form.Field field={fields.description} />
    </>
  );
};

export default DescriptionTab;
