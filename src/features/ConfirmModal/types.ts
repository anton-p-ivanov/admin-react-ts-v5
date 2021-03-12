import React from 'react';

export type TUseHandlers = {
  dismiss: (event: React.MouseEvent<HTMLButtonElement>) => void;
  confirm: (event: React.FormEvent<HTMLFormElement>) => void;
};

export type TConfirmData = {
  password: string;
  endpoint: string;
  data: Record<string, unknown>;
  onSuccess?: (response: Response) => void;
};
