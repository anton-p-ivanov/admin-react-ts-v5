import React from 'react';

import { DropDown, Icon } from 'components';

import { useHandlers } from '../../hooks';
import { TVersionsListContextProps } from './types';

const VersionsListContext: React.FC<TVersionsListContextProps> = ({ data }) => {
  const handlers = useHandlers(data);

  return (
    <DropDown toggle={<Icon name="menu" title="Выберите действие" />}>
      <DropDown.Button onClick={data.isActive ? handlers.deactivate : handlers.activate}>
        {data.isActive ? <>Деактивировать</> : <>Активировать</>}
      </DropDown.Button>
      <DropDown.Divider />
      <DropDown.Button onClick={handlers.edit}>Переименовать</DropDown.Button>
      <DropDown.Button onClick={handlers.download}>Скачать</DropDown.Button>
      <DropDown.Divider />
      <DropDown.Button onClick={handlers.delete}>Удалить</DropDown.Button>
    </DropDown>
  );
};

export default VersionsListContext;
