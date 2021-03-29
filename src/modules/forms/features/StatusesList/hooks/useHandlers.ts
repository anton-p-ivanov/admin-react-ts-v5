import React, { useContext } from 'react';

import { v4 } from 'uuid';

import { TForm, TFormStatus } from 'modules/forms/config/types';
import Context from 'store';

import { Context as StatusContext, defaults } from '../../StatusesModal';

type TUseHandlers<T> = {
  create: (event: React.MouseEvent<T>) => void;
  edit: (event: React.MouseEvent<T>) => void;
  copy: (event: React.MouseEvent<T>) => void;
  delete: (event: React.MouseEvent<T>) => void;
  refresh: (event: React.MouseEvent<T>) => void;
};

const useHandlers = <T>(status?: TFormStatus): TUseHandlers<T> => {
  const modal = useContext(StatusContext);
  const { dataView, formView } = useContext(Context);

  const _prevent = (event: React.MouseEvent<T>) => {
    event.preventDefault();
    return new Promise((resolve) => resolve());
  };

  const refreshHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => dataView.update({ ...dataView.state, _timestamp: new Date().getTime() }));
  };

  const editHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      modal.update({ ...modal.state, isVisible: true, data: status });
    });
  };

  const copyHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      modal.update({ ...modal.state, isVisible: true, data: { ...status, uuid: v4() } });
    });
  };

  const deleteHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      const data = formView.state.data as TForm;
      const selected = status ? [status.uuid] : dataView.state.selected['form-statuses'] || [];
      const statuses = data.statuses.filter((item) => !selected.includes(item.uuid));

      formView.update({ ...formView.state, data: { ...data, statuses } });
    });
  };

  const createHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      modal.update({ ...modal.state, isVisible: true, data: { ...defaults, uuid: v4() } });
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
