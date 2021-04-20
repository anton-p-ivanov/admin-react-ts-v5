import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

import { Button, Tabs } from 'components';
import FormView from 'features/FormView';

import defaults from './defaults';
import fields from './fields';
import tabs from './tabs';
import { TCatalogsFormProps } from './types';

import './styles.scss';

const CatalogsForm: React.FC<TCatalogsFormProps> = (props) => {
  const { isNewElement = false } = props;
  const { uuid } = useParams();
  const history = useHistory();

  const endpoints = {
    request: uuid && `GET:/catalogs/${uuid}`,
    submit: isNewElement ? `POST:/catalogs` : `PUT:/catalogs/${uuid}`,
  };

  const onSubmitSucceed = () => {
    return history.push(`/admin/catalogs`);
  };

  return (
    <FormView endpoints={endpoints} fields={fields} defaults={defaults} onSubmitSucceed={onSubmitSucceed}>
      <Tabs items={tabs} />
      <FormView.Actions>
        <Link to={'/admin/catalogs'} className={`btn btn--default`}>
          Отменить
        </Link>
        <Button type="submit" variant="primary">
          Сохранить
        </Button>
      </FormView.Actions>
    </FormView>
  );
};

export default CatalogsForm;
