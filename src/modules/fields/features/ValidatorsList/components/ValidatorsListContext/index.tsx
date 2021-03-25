import React from 'react';

import { DropDown, Icon } from 'components';

import { useHandlers } from '../../hooks';
import { TValidatorsListContextProps } from './types';

const ValidatorsListContext: React.FC<TValidatorsListContextProps> = ({ data }) => {
  const handlers = useHandlers(data);

  return (
    <DropDown toggle={<Icon name="menu" title="Выберите действие" />}>
      <DropDown.Button onClick={handlers.edit}>Изменить</DropDown.Button>
      <DropDown.Button onClick={handlers.copy}>Копировать</DropDown.Button>
      <DropDown.Divider />
      <DropDown.Button onClick={handlers.delete}>Удалить</DropDown.Button>
    </DropDown>
  );
};

export default ValidatorsListContext;
