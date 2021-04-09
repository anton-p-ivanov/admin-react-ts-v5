import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from 'components';

import { TElementsListTitle } from './types';

const ElementsListTitle: React.FC<TElementsListTitle> = (props) => {
  const { data } = props;
  const type = data.entity.isSection ? 'folder' : 'file-text';

  return (
    <span className={`element-title element-title--${type}`}>
      <Icon name={type} />
      {data.entity.isSection ? (
        <Link to={`/catalogs/elements/${data.uuid}/list`}>{data.entity.title}</Link>
      ) : (
        data.entity.title
      )}
    </span>
  );
};

export default ElementsListTitle;
