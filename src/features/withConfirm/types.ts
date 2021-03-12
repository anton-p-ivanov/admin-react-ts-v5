import React from 'react';

export type TConfirmHandlers = {
  show: () => void;
  dismiss: (event: React.MouseEvent<HTMLButtonElement>) => void;
  confirm: (event: React.FormEvent<HTMLFormElement>) => void;
};

export type TConfirmContext = {
  confirm: () => void;
};
