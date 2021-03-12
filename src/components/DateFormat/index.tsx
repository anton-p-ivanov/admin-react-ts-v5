import React from 'react';

import { TDateFormatProps } from './types';

const DateFormat: React.FC<TDateFormatProps> = (props) => {
  const { value, format } = props;

  const date = new Date(value);

  switch (format) {
    default:
      return <>{date.toLocaleString()}</>;
  }
};

export default DateFormat;
