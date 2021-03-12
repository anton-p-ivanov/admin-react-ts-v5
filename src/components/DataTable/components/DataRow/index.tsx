import React from 'react';

import Utils from 'utils';

import { TDataRowProps } from './types';

const DataRow: React.FC<TDataRowProps> = (props) => {
  const { isDisabled = false, isSelected = false, children } = props;
  const attrs = {
    className: Utils.className({
      'data-table__row': true,
      'data-table__row--disabled': isDisabled,
      'data-table__row--selected': isSelected,
    }),
  };

  return <tr className={attrs.className}>{children}</tr>;
};

export default DataRow;
