import React from 'react';

import { Icon, DropDown } from 'components';

import { useHandlers } from '../../hooks';
import { TManagersListContextProps } from './types';

const ManagersListContext: React.FC<TManagersListContextProps> = ({ data }) => {
  const handlers = useHandlers(data);

  return (
    <DropDown toggle={<Icon name="menu" title="Выберите действие" />}>
      <DropDown.Button onClick={handlers.delete}>Удалить</DropDown.Button>
    </DropDown>
  );
};

export default ManagersListContext;
