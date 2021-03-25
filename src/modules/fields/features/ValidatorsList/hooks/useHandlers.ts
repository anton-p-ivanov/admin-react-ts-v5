import React, { useContext } from 'react';

import { TFieldValidator } from 'modules/fields/config/types';
import Store from 'store';

import { Context as ContextModal, defaults } from '../../ValidatorsModal';

type TUseHandlers<T> = {
  create: (event: React.MouseEvent<T>) => void;
  edit: (event: React.MouseEvent<T>) => void;
  copy: (event: React.MouseEvent<T>) => void;
  delete: (event: React.MouseEvent<T>) => void;
  refresh: (event: React.MouseEvent<T>) => void;
};

const useHandlers = <T>(validator?: TFieldValidator): TUseHandlers<T> => {
  const modal = useContext(ContextModal);
  const { dataView } = useContext(Store);

  const _prevent = (event: React.MouseEvent<T>) => {
    event.preventDefault();
    return new Promise((resolve) => resolve());
  };

  const refreshHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      dataView.update({ ...dataView.state, _timestamp: new Date().getTime() });
    });
  };

  const editHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      validator && modal.update({ ...modal.state, isVisible: true, data: validator });
    });
  };

  const copyHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      validator && modal.update({ ...modal.state, isVisible: true, data: validator });
    });
  };

  const deleteHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then();
  };

  const createHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      modal.update({ ...modal.state, isVisible: true, data: defaults });
    });
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
