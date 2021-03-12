import React from 'react';

export type TDownloaderData = {
  filename: string;
  isCompleted: boolean;
  completed: number;
};

export type TUseHandlers = {
  dismiss: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
