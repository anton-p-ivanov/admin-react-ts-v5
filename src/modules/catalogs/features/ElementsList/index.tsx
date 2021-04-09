import React from 'react';

import ListView from 'features/ListView';

import * as props from './props';
import { TElementsListContext } from './types';

import './styles.scss';

const ElementsList: React.FC<TElementsListContext> = ({ node }) => {
  return (
    <ListView
      endpoint={`GET:/catalogs/${node}/nodes`}
      columns={props.columns}
      templates={props.templates}
      conditions={props.conditions}
      id={`elements-list`}
    />
  );
};

export default ElementsList;
