import React from 'react';

export type TDateProps = {
  name: string;
  value?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
};
