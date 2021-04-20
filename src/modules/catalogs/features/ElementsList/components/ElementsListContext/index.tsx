import React from 'react';

import { DropDown, Icon } from 'components';

import { useHandlers } from '../../hooks';
import { TElementsListContextProps } from './types';

const ElementsListContext: React.FC<TElementsListContextProps> = ({ data }) => {
  const handlers = useHandlers(data);

  return (
    <DropDown toggle={<Icon name="menu" title="Выберите действие" />}>
      {data.entity.isSection && <DropDown.Link route={`/catalogs/elements/${data.uuid}/list`}>Открыть</DropDown.Link>}
      {data.entity.isSection && <DropDown.Divider />}
      <DropDown.Link route={`/catalogs/elements/${data.entity.uuid}/edit`}>Изменить</DropDown.Link>
      <DropDown.Link route={`/catalogs/elements/${data.entity.uuid}/copy`}>Копировать</DropDown.Link>
      <DropDown.Divider />
      <DropDown.Button onClick={handlers.delete}>Удалить</DropDown.Button>
    </DropDown>
  );
};

export default ElementsListContext;
