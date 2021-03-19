import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import { Button, Tabs } from 'components';
import FormView from 'features/FormView';

import defaults from './defaults';
import fields from './fields';
import tabs from './tabs';
import { TAccountsFormProps } from './types';

const AccountsForm: React.FC<TAccountsFormProps> = (props) => {
  const { isNewElement = false } = props;
  const { uuid } = useParams();
  const history = useHistory();

  const endpoints = {
    request: uuid && `GET:/accounts/${uuid}`,
    submit: isNewElement ? `POST:/accounts` : `PUT:/accounts/${uuid}`,
  };

  const onSubmitSucceed = () => {
    return history.push(`/accounts`);
  };

  return (
    <FormView endpoints={endpoints} fields={fields} defaults={defaults} onSubmitSucceed={onSubmitSucceed}>
      <Tabs items={tabs} />
      <FormView.Actions>
        <Link to={'/accounts'} className={`btn btn--default`}>
          Отменить
        </Link>
        <Button type="submit" variant="primary">
          Сохранить
        </Button>
      </FormView.Actions>
    </FormView>
  );
};

export default AccountsForm;
