import React from 'react';

export type TDateTimeProps = {
  name: string;
  value?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
};
