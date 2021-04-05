import React, { useContext } from 'react';

import { Form } from 'components';
import { Context } from 'features/FormView';

import './styles.scss';

const AccessTab: React.FC = () => {
  const { fields } = useContext(Context);

  return (
    <>
      <h2>Управление доступом</h2>
      <div className={`grid`}>
        <div className={`grid__col`}>
          <Form.Field field={fields.sites} />
        </div>
        <div className={`grid__col`}>
          <Form.Field field={fields.roles} />
        </div>
      </div>
    </>
  );
};

export default AccessTab;
