import React from 'react';

import DataTable from '../../../';
import { THeaderDefaultProps } from '../types';

const HeaderDefault: React.FC<THeaderDefaultProps> = ({ column }) => {
  if ('sort' in column && column.sort) {
    return (
      <DataTable.Sort name={column.name} sort={column.sort}>
        {column.title}
      </DataTable.Sort>
    );
  }

  return <>{column.title}</>;
};

export default HeaderDefault;
