import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Icon } from 'components';
import API from 'utils/api';

import { TUserBarProps, TLoggedInUser, INITIAL_STATE } from './types';
import './styles.scss';

const UserBar: React.FC<TUserBarProps> = ({ token }) => {
  const [user, setUser] = useState<TLoggedInUser>(INITIAL_STATE);

  useEffect(() => {
    API.request({ url: `/user` }).then((response) => setUser(response.data));
  }, [token]);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (confirm('Завершить работу?')) {
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpired');
      location.reload();
    }
  };

  return (
    <div className={`content-view__userbar`}>
      <div className="data-toolbar__group">
        <div className="data-toolbar__item">
          <Link
            to="/profile"
            className="btn btn--default btn--small"
            title={`Нажмите, чтобы перейти к управлению личным профилем`}
          >
            {user.fullName}
          </Link>
        </div>
        <div className="data-toolbar__item">
          <Button isIcon={true} size={`small`} onClick={onClick}>
            <Icon name={`log-out`} title={`Нажмите, чтобы завершить работу`} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserBar;
