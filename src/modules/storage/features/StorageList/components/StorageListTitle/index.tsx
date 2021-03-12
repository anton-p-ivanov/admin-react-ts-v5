import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from 'components';

import { TStorageListTitle } from './types';

const StorageListTitle: React.FC<TStorageListTitle> = (props) => {
  const { data } = props;
  const type = data.storage.isDirectory ? 'folder' : 'file-text';

  return (
    <span className={`storage-title storage-title--${type}`}>
      <Icon name={type} />
      {data.storage.isDirectory ? <Link to={`/storage/${data.uuid}`}>{data.storage.title}</Link> : data.storage.title}
    </span>
  );
};

export default StorageListTitle;
