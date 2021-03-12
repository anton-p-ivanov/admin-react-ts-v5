import React, { useContext } from 'react';

import Context from '../context';
import { TUseHandlers } from '../types';

const useHandlers = (): TUseHandlers => {
  const confirm = useContext(Context);

  const dismissHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    confirm.reset();
  };

  return {
    dismiss: dismissHandler,
  };
};

export default useHandlers;
