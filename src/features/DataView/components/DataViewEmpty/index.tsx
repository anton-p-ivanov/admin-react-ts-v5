import React from 'react';

import { TDataViewEmptyProps } from './types';

const DataViewEmpty: React.FC<TDataViewEmptyProps> = ({ columns }) => {
  return (
    <tr>
      <td colSpan={columns.length}>
        <em>Элементы не найдены</em>
      </td>
    </tr>
  );
};

export default DataViewEmpty;
