import React, { useContext } from 'react';

import { TField } from 'modules/fields/config/types';
import Store from 'store';

import { Context, defaults } from '../../FieldsModal';

type TUseHandlers<T> = {
  create: (event: React.MouseEvent<T>) => void;
  edit: (event: React.MouseEvent<T>) => void;
  copy: (event: React.MouseEvent<T>) => void;
  delete: (event: React.MouseEvent<T>) => void;
  refresh: (event: React.MouseEvent<T>) => void;
};

const useHandlers = <T>(field?: TField): TUseHandlers<T> => {
  const modal = useContext(Context);
  const { dataView, formView } = useContext(Store);

  const _prevent = (event: React.MouseEvent<T>) => {
    event.preventDefault();
    return new Promise((resolve) => resolve());
  };

  const refreshHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => dataView.update({ ...dataView.state, _timestamp: new Date().getTime() }));
  };

  const editHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      field && modal.update({ ...modal.state, isVisible: true, data: field });
    });
  };

  const copyHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      field && modal.update({ ...modal.state, isVisible: true, data: { ...field, uuid: '' } });
    });
  };

  const deleteHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      const data = formView.state.data as { fields: TField[] };
      const selected = field ? [field.uuid] : dataView.state.selected['fields'] || [];
      const fields = data.fields.filter((item) => !selected.includes(item.uuid));

      formView.update({ ...formView.state, data: { ...data, fields } });
    });
  };

  const createHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => modal.update({ ...modal.state, isVisible: true, data: defaults }));
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
