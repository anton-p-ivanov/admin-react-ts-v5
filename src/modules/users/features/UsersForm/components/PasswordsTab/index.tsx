import React, { useContext } from 'react';

import { Button } from 'components';
import { Context as ConfirmContext } from 'features/ConfirmModal';
import { TUser, TUserPassword } from 'modules/users/config/types';
import Store from 'store';

import PasswordsList from '../PasswordsList';

const PasswordsTab: React.FC = () => {
  const { formView } = useContext(Store);
  const confirm = useContext(ConfirmContext);
  const user = formView.state.data as TUser;

  const renewPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const data = {
      endpoint: `POST:/users/${user.uuid}/password`,
      onSuccess: (passwords: TUserPassword[]) => {
        formView.update({ ...formView.state, data: { ...user, passwords } });
      },
    };

    confirm.update({ ...confirm.state, isVisible: true, data });
  };

  return (
    <>
      <h2>Управление паролями</h2>
      <p>
        Список паролей, выданных пользователю. Первый пароль выдаётся автоматически при создании нового пользователя.
      </p>
      {user.passwords ? (
        <>
          <PasswordsList passwords={user.passwords} />
          <Button size="small" onClick={renewPassword} isDisabled={!user.uuid}>
            {user.passwords.length > 0 ? 'Сменить пароль' : 'Выдать пароль'}
          </Button>
        </>
      ) : (
        <p>Список паролей будет доступен после создания пользователя</p>
      )}
    </>
  );
};

export default PasswordsTab;
