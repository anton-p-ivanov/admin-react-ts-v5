import React from 'react';

import { TDateFormatProps } from './types';

const DateFormat: React.FC<TDateFormatProps> = (props) => {
  const { value, format } = props;

  const date = new Date(value);

  switch (format) {
    case 'date':
      return <>{date.toLocaleDateString()}</>;
    default:
      return <>{date.toLocaleString()}</>;
  }
};

export default DateFormat;
