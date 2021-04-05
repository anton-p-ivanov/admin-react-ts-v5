import React from 'react';

import { Icon, Button, Form } from 'components';

import { useFields, useHandlers } from './hooks';

import './styles.scss';

const AnswersFormInputs: React.FC = () => {
  const fields = useFields();
  const handlers = useHandlers();

  return (
    <div className={`answers-form`}>
      <Form.Input field={fields.answer} />
      <div className={`answer-isValid`} title={`Отметьте, если ответ правильный`}>
        <Form.Input field={fields.isValid} />
        Прав.?
      </div>
      <Button isIcon={true} onClick={handlers.add}>
        <Icon name={`plus`} />
      </Button>
    </div>
  );
};

export default AnswersFormInputs;
