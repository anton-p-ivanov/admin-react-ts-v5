import React from 'react';

import { TTrainingLesson } from 'modules/training/config/types';

type TUseHandlers<T> = {
  create: (event: React.MouseEvent<T>) => void;
  edit: (event: React.MouseEvent<T>) => void;
  copy: (event: React.MouseEvent<T>) => void;
  delete: (event: React.MouseEvent<T>) => void;
  refresh: (event: React.MouseEvent<T>) => void;
};

/**
 * useHandlers hook
 */
const useHandlers = <T>(lesson?: TTrainingLesson): TUseHandlers<T> => {
  const _prevent = (event: React.MouseEvent<T>) => {
    event.preventDefault();
    return new Promise((resolve) => resolve());
  };

  const refreshHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then();
  };

  const editHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then();
  };

  const copyHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then();
  };

  const deleteHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then();
  };

  const createHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then();
  };

  return {
    create: createHandler,
    edit: editHandler,
    copy: copyHandler,
    delete: deleteHandler,
    refresh: refreshHandler,
  };
};

export default useHandlers;
