import React from 'react';

export type TPasswordProps = {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  isDisabled?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
};
