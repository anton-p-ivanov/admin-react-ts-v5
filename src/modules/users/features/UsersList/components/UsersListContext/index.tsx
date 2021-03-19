import React from 'react';

import { DropDown, Icon } from 'components';

import { useHandlers } from '../../hooks';
import { TUsersListContextProps } from './types';

const UsersListContext: React.FC<TUsersListContextProps> = ({ data }) => {
  const handlers = useHandlers(data);

  return (
    <DropDown toggle={<Icon name="menu" title="Выберите действие" />}>
      <DropDown.Link route={`/users/${data.uuid}/edit`}>Изменить</DropDown.Link>
      <DropDown.Link route={`/users/${data.uuid}/copy`}>Копировать</DropDown.Link>
      <DropDown.Divider />
      <DropDown.Button onClick={handlers.delete}>Удалить</DropDown.Button>
    </DropDown>
  );
};

export default UsersListContext;
