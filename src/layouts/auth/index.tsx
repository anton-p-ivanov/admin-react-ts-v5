import React, { useContext, useEffect } from 'react';

import { AxiosRequestConfig, Method } from 'axios';

import { Button } from 'components';
import FormView from 'features/FormView';
import { LoginTab } from 'layouts/auth/components';
import Store from 'store';
import API from 'utils/api';

import fields from './fields';
import { TAuthProps } from './types';

import './styles.scss';

const Auth: React.FC<TAuthProps> = ({ setToken }) => {
  const { formView } = useContext(Store);
  const data = formView.state.data;
  const isSessionExpired = localStorage.getItem('tokenExpired') === 'true';

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
        localStorage.setItem('username', data.username as string);
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

  const isDisabled = typeof data.username === 'undefined' || typeof data.password === 'undefined';

  useEffect(() => {
    if (isSessionExpired) {
      const errors = {
        ...formView.state.errors,
        _status: ['Время вашей сессии истекло. Пожалуйста, авторизуйтесь повторно.'],
      };
      formView.update({ ...formView.state, errors });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSessionExpired]);

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      formView.update({ ...formView.state, data: { ...formView.state.data, username } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id={`auth`}>
      <FormView endpoints={endpoints} fields={fields} onSubmit={onSubmit}>
        <div className={`form__title`}>Добро пожаловать!</div>
        {formView.state.errors._status && (
          <div className={`form__field`}>
            <div className={`form__error`}>{formView.state.errors._status.join()}</div>
          </div>
        )}
        <LoginTab />
        <div className="form__actions">
          <Button type="submit" variant="primary" isDisabled={isDisabled}>
            Войти в систему
          </Button>
        </div>
      </FormView>
    </div>
  );
};

export default Auth;
