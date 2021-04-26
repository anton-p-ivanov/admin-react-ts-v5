import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

import { Button, Tabs } from 'components';
import FormView from 'features/FormView';

import { SectionTab } from './components';
import { Context, defaults, tabs, fields } from './props';
import { TElementsFormProps } from './types';

import './styles.scss';

const ElementsForm: React.FC<TElementsFormProps> = (props) => {
  const { uuid } = useParams();
  const history = useHistory();
  const { data = defaults.element, isNewElement = false } = props;
  const returnPath = `/catalogs/elements/${data.parentNodes[0]}/list`;

  const endpoints = {
    submit: isNewElement ? `POST:/catalogs/elements` : `PUT:/catalogs/elements/${uuid}`,
  };

  const onSubmitSucceed = () => {
    return history.push(returnPath);
  };

  return (
    <Context.Provider value={{ root: data.rootNode }}>
      <FormView data={data} endpoints={endpoints} fields={fields} defaults={defaults} onSubmitSucceed={onSubmitSucceed}>
        {data.isSection ? <SectionTab /> : <Tabs items={tabs} />}
        <FormView.Actions>
          <Link to={returnPath} className={`btn btn--default`}>
            Отменить
          </Link>
          <Button type="submit" variant="primary">
            Сохранить
          </Button>
        </FormView.Actions>
      </FormView>
    </Context.Provider>
  );
};

export { defaults };
export default ElementsForm;
