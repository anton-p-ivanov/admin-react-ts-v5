import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

import { Button } from 'components';
import Tabs from 'components/Tabs';
import FormView from 'features/FormView';

import { defaults } from './defaults';
import { fields } from './fields';
import { tabs } from './tabs';
import { TCoursesFormProps } from './types';

const CoursesForm: React.FC<TCoursesFormProps> = ({ isNewElement = false }) => {
  const { uuid } = useParams();
  const history = useHistory();

  const endpoints = {
    request: uuid && `GET:/training/courses/${uuid}`,
    submit: isNewElement ? `POST:/training/courses` : `PUT:/training/courses/${uuid}`,
  };

  const onSubmitSucceed = () => {
    history.push(`/training/courses`);
  };

  return (
    <FormView endpoints={endpoints} fields={fields} defaults={defaults} onSubmitSucceed={onSubmitSucceed}>
      <Tabs items={tabs} />
      <FormView.Actions>
        <Link to={'/training/courses'} className={`btn btn--default`}>
          Отменить
        </Link>
        <Button type="submit" variant="primary">
          Сохранить
        </Button>
      </FormView.Actions>
    </FormView>
  );
};

export default CoursesForm;
