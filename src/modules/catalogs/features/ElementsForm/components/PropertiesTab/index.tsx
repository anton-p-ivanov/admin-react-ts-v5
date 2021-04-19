import React, { useContext } from 'react';

import { Form } from 'components';
import { Context } from 'features/FormView';

const PropertiesTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <h2>Основные параметры</h2>
      <Form.Group>
        <Form.Field field={fields.isActive} variant={`horizontal`} />
        <div className="form__field form__field--horizontal">
          <label className="form__label" htmlFor="validFrom">
            Период активности
          </label>
          <div className={`form__wrapper form__wrapper--dates`}>
            <div>
              <Form.Input field={fields.activeFrom} />
              <Form.Hint field={fields.activeFrom} />
            </div>
            <div>
              <Form.Input field={fields.activeTo} />
              <Form.Hint field={fields.activeTo} />
            </div>
          </div>
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.title} />
        <Form.Field field={fields.code} />
        <Form.Field field={fields.description} />
        <Form.Field field={fields.content} />
      </Form.Group>
    </>
  );
};

export default PropertiesTab;
