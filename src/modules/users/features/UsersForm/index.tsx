import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import { Button, Tabs } from 'components';
import FormView from 'features/FormView';

import defaults from './defaults';
import fields from './fields';
import tabs from './tabs';
import { TUsersFormProps } from './types';

const UsersForm: React.FC<TUsersFormProps> = (props) => {
  const { isNewElement = false } = props;
  const { uuid } = useParams();
  const history = useHistory();

  const endpoints = {
    request: uuid && `GET:/users/${uuid}`,
    submit: isNewElement ? `POST:/users` : `PUT:/users/${uuid}`,
  };

  const onSubmitSucceed = () => {
    return history.push(`/users`);
  };

  return (
    <FormView endpoints={endpoints} fields={fields} defaults={defaults} onSubmitSucceed={onSubmitSucceed}>
      <Tabs items={tabs} disabled={isNewElement ? ['passwords'] : []} />
      <FormView.Actions>
        <Link to={'/users'} className={`btn btn--default`}>
          Отменить
        </Link>
        <Button type="submit" variant="primary">
          Сохранить
        </Button>
      </FormView.Actions>
    </FormView>
  );
};

export default UsersForm;
