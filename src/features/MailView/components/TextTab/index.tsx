import React, { useContext } from 'react';

import { Form } from 'components';

import Context from '../../context';

const TextTab: React.FC = () => {
  const { fields } = useContext(Context);

  return <Form.Input field={fields.text} />;
};

export default TextTab;
