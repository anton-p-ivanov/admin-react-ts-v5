import React from 'react';

import { DropDown, Icon } from 'components';

import { useHandlers } from '../../hooks';
import { TFormsListContextProps } from './types';

const FormsListContext: React.FC<TFormsListContextProps> = ({ data }) => {
  const handlers = useHandlers();

  return (
    <DropDown toggle={<Icon name="menu" title="Выберите действие" />}>
      <DropDown.Link route={`/forms/${data.uuid}/edit`}>Изменить</DropDown.Link>
      <DropDown.Link route={`/forms/${data.uuid}/copy`}>Копировать</DropDown.Link>
      <DropDown.Divider />
      <DropDown.Button onClick={handlers.delete}>Удалить</DropDown.Button>
    </DropDown>
  );
};

export default FormsListContext;
