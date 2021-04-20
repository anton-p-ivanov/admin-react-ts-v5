import React from 'react';

import { Form, Tabs } from 'components';

import Context from './context';
import { defaults } from './defaults';
import { useFields } from './hooks';
import tabs from './tabs';
import { TMailViewProps } from './types';

const MailView: React.FC<TMailViewProps> = (props) => {
  const fields = useFields(props.reducer);

  return (
    <Context.Provider value={{ fields }}>
      <p className={`text--small`}>
        Допускается использование символьных кодов полей веб-формы, например, <code>{`{{ CONTACT_EMAIL }}`}</code>
      </p>
      <Form.Group>
        <Form.Field field={fields.subject} />
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.recipient} />
        <Form.Field field={fields.sender} />
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.replyTo} />
        <Form.Field field={fields.copyTo} />
      </Form.Group>
      <Form.Label name={`template`}>Код почтового шаблона</Form.Label>
      <Tabs items={tabs} variant={`horizontal`} />
    </Context.Provider>
  );
};

export { defaults };
export default MailView;
