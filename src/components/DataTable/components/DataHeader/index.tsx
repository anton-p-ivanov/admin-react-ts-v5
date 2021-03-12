import React from 'react';

import Utils from 'utils';

import { TDataColumn, TDataSelectorColumn } from '../../types';
import { HeaderContext, HeaderDefault, HeaderSelector } from './components';
import { TDataHeaderProps } from './types';

type TDataHeader = React.FC<TDataHeaderProps> & {
  Default: typeof HeaderDefault;
  Context: typeof HeaderContext;
  Selector: typeof HeaderSelector;
};

const DataHeader: TDataHeader = ({ column }) => {
  const { name, type = 'default' } = column;
  const className = Utils.className({
    [`data-table__header`]: true,
    [`data-table__header--${name}`]: true,
  });

  return (
    <th className={className} key={`data-header-${name}`}>
      {type === 'default' && <HeaderDefault column={column as TDataColumn} />}
      {type === 'selector' && <HeaderSelector column={column as TDataSelectorColumn} />}
      {type === 'context' && <HeaderContext />}
    </th>
  );
};

DataHeader.Default = HeaderDefault;
DataHeader.Context = HeaderContext;
DataHeader.Selector = HeaderSelector;

export default DataHeader;
