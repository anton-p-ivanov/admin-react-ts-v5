import React, { useContext } from 'react';

import { Form } from 'components';

import Context from '../../context';

const HTMLTab: React.FC = () => {
  const { fields } = useContext(Context);

  return <Form.Input field={fields.html} />;
};

export default HTMLTab;
