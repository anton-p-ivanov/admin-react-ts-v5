import React, { useContext } from 'react';

import { Form } from 'components';
import { Context } from 'features/FormView';

import './styles.scss';

const PropertiesTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <h2>Основные параметры</h2>
      <Form.Group>
        <Form.Field field={fields.isActive} />
        <div className="form__field form__field--default">
          <label className="form__label" htmlFor="validFrom">
            Даты активности
          </label>
          <div className={`valid-dates`}>
            <div>
              <Form.Field field={fields.validFrom} />
            </div>
            <div>
              <Form.Field field={fields.validTo} />
            </div>
          </div>
        </div>
      </Form.Group>
      <Form.Group>
        <Form.Field field={fields.title} />
        <Form.Field field={fields.code} />
        <Form.Field field={fields.description} />
      </Form.Group>
    </>
  );
};

export default PropertiesTab;
