import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

import { Button, Tabs } from 'components';
import FormView from 'features/FormView';

import defaults from './defaults';
import fields from './fields';
import tabs from './tabs';
import { TFormsFormProps } from './types';

const FormsForm: React.FC<TFormsFormProps> = (props) => {
  const { isNewElement = false } = props;
  const { uuid } = useParams();
  const history = useHistory();

  const endpoints = {
    request: uuid && `GET:/forms/${uuid}`,
    submit: isNewElement ? `POST:/forms` : `PUT:/forms/${uuid}`,
  };

  const onSubmitSucceed = () => {
    return history.push(`/forms`);
  };

  return (
    <FormView endpoints={endpoints} fields={fields} defaults={defaults} onSubmitSucceed={onSubmitSucceed}>
      <Tabs items={tabs} />
      <FormView.Actions>
        <Link to={'/forms'} className={`btn btn--default`}>
          Отменить
        </Link>
        <Button type="submit" variant="primary">
          Сохранить
        </Button>
      </FormView.Actions>
    </FormView>
  );
};

export default FormsForm;
