import React, { useContext } from 'react';

import { AxiosRequestConfig, Method } from 'axios';

import { Button } from 'components';
import FormView from 'features/FormView';
import { LoginTab } from 'layouts/auth/components';
import Store from 'store';
import API from 'utils/api';

import fields from './fields';
import { TAuthProps } from './types';

const Auth: React.FC<TAuthProps> = ({ setToken }) => {
  const { formView } = useContext(Store);
  const data = formView.state.data;

  const endpoints = {
    submit: `POST:/auth`,
  };

  const onSubmit = () => {
    const [method, url] = endpoints.submit.split(':');
    const config: AxiosRequestConfig = {
      url,
      method: method as Method,
      data: {
        username: data.username,
        password: data.password,
      },
    };

    API.request(config)
      .then((response) => {
        response && setToken(response.data.token);
      })
      .catch((error) => {
        const message = error.response ? error.response.data.message : 'Authentication failed';

        formView.update({
          ...formView.state,
          errors: {
            _status: [message],
          },
        });
      });
  };

  return (
    <FormView endpoints={endpoints} fields={fields} onSubmit={onSubmit}>
      {formView.state.errors._status && <div className={`error`}>{formView.state.errors._status.join()}</div>}
      <LoginTab />
      <FormView.Actions>
        <Button type="submit" variant="primary">
          Сохранить
        </Button>
      </FormView.Actions>
    </FormView>
  );
};

export default Auth;
