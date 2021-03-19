import React from 'react';

import { DropDown, Icon } from 'components';

import { useHandlers } from '../../hooks';
import { TAccountsListContextProps } from './types';

const AccountsListContext: React.FC<TAccountsListContextProps> = ({ data }) => {
  const handlers = useHandlers();

  return (
    <DropDown toggle={<Icon name="menu" title="Выберите действие" />}>
      <DropDown.Link route={`/accounts/${data.uuid}/edit`}>Изменить</DropDown.Link>
      <DropDown.Link route={`/accounts/${data.uuid}/copy`}>Копировать</DropDown.Link>
      <DropDown.Divider />
      <DropDown.Button onClick={handlers.delete}>Удалить</DropDown.Button>
    </DropDown>
  );
};

export default AccountsListContext;
