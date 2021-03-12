import React, { useContext, useEffect } from 'react';

import { Form } from 'components';
import { useFields } from 'features/FormView/hooks';
import Store from 'store';
import Utils from 'utils';

import { FormActions } from './components';
import Context from './context';
import { TFormViewProps } from './types';

import './styles.scss';

type TFormView = React.FC<TFormViewProps> & {
  Actions: typeof FormActions;
};

let timeout: NodeJS.Timeout;

const FormView: TFormView = (props) => {
  const { endpoints, fields, defaults = {}, onSubmitSucceed, children } = props;
  const { formView } = useContext(Store);
  const { state, update, request, reset, submit } = formView;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    submit(endpoints.submit, state.data).then((data) => {
      return onSubmitSucceed && onSubmitSucceed(data);
    });
  };

  const shadowClassName = Utils.className({
    [`form-view__shadow`]: true,
    [`form-view__shadow--active`]: ['SUBMITTING', 'FETCHING'].indexOf(state.status) !== -1,
  });

  // Fetch model data on component load
  useEffect(() => {
    if (endpoints.request) {
      request(endpoints.request);
    } else {
      update({ ...state, data: defaults });
    }

    return () => reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state.status === 'SUBMIT_SUCCEED') {
      timeout = setTimeout(() => update({ ...state, status: 'WAITING' }), 2000);
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.status]);

  return (
    <Context.Provider value={{ fields: useFields(fields) }}>
      <div className={`form-view`}>
        <Form variant="horizontal" onSubmit={onSubmit}>
          {children}
        </Form>
        <div className={shadowClassName} />
      </div>
    </Context.Provider>
  );
};

FormView.Actions = FormActions;

export default FormView;

export { Context };
