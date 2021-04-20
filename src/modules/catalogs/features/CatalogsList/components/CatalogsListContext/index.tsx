import React from 'react';

import { DropDown, Icon } from 'components';

import { useHandlers } from '../../hooks';
import { TCatalogsListContextProps } from './types';

const CatalogsListContext: React.FC<TCatalogsListContextProps> = ({ data }) => {
  const handlers = useHandlers(data);

  return (
    <DropDown toggle={<Icon name="menu" title="Выберите действие" />}>
      <DropDown.Link route={`/admin/catalogs/${data.uuid}/edit`}>Изменить</DropDown.Link>
      <DropDown.Link route={`/admin/catalogs/${data.uuid}/copy`}>Копировать</DropDown.Link>
      <DropDown.Divider />
      <DropDown.Button onClick={handlers.delete}>Удалить</DropDown.Button>
    </DropDown>
  );
};

export default CatalogsListContext;
