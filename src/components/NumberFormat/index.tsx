import React from 'react';

import fileSize from 'filesize';

import { TNumberFormatProps } from './types';

const NumberFormat: React.FC<TNumberFormatProps> = (props) => {
  const { value, format } = props;

  switch (format) {
    case 'filesize':
      return <>{fileSize(value)}</>;
    default:
      return <>{value}</>;
  }
};

export default NumberFormat;
