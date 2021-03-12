import React from 'react';

export type TUseHandlers = {
  dismiss: (event: React.MouseEvent<HTMLButtonElement>) => void;
  confirm: (event: React.FormEvent<HTMLFormElement>) => void;
};
