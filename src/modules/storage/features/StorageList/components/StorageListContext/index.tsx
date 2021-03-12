import React from 'react';

import DropDown from 'components/DropDown';
import Icon from 'components/Icon';

import useHandlers from '../../hooks/useHandlers';
import { TStorageListContextProps } from './types';

const StorageListContext: React.FC<TStorageListContextProps> = ({ data }) => {
  const handlers = useHandlers(data);

  return (
    <DropDown toggle={<Icon name="menu" title="Выберите действие" />}>
      {data.storage.isDirectory && <DropDown.Link route={`/storage/${data.uuid}`}>Открыть</DropDown.Link>}
      {data.storage.isDirectory && <DropDown.Divider />}
      {!data.storage.isDirectory && <DropDown.Button onClick={handlers.download}>Скачать</DropDown.Button>}
      <DropDown.Link route={`/storage/${data.storage.uuid}/edit/${data.storage.isDirectory ? 'directory' : 'file'}`}>
        Изменить
      </DropDown.Link>
      <DropDown.Divider />
      <DropDown.Button onClick={handlers.delete}>Удалить</DropDown.Button>
    </DropDown>
  );
};

export default StorageListContext;
