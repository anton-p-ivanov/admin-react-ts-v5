import React from 'react';

import { Icon, DateFormat } from 'components';
import { TUserPassword } from 'modules/users/config/types';

import { TPasswordsListRowProps } from './types';

import './styles.scss';

const PasswordsListRow: React.FC<TPasswordsListRowProps> = (props) => {
  const { data } = props;
  const password = data as TUserPassword;

  return (
    <>
      <td>{password.createdAt ? <DateFormat value={password.createdAt} /> : <em>Нет данных</em>}</td>
      <td>{password.expiredAt ? <DateFormat value={password.expiredAt} /> : <em>Нет данных</em>}</td>
      <td>
        <Icon name={password.isExpired ? 'x' : 'check'} variant={password.isExpired ? 'muted' : 'success'} />
      </td>
    </>
  );
};

export default PasswordsListRow;
