import React, { useContext } from 'react';

import { TField, TFieldValue } from 'modules/fields/config/types';
import Store from 'store';

import { Context as FieldContext } from '../../FieldsModal';
import { Context as ValueContext, defaults } from '../../ValuesModal';

type TUseHandlers<T> = {
  create: (event: React.MouseEvent<T>) => void;
  edit: (event: React.MouseEvent<T>) => void;
  copy: (event: React.MouseEvent<T>) => void;
  delete: (event: React.MouseEvent<T>) => void;
  refresh: (event: React.MouseEvent<T>) => void;
};

const useHandlers = <T>(value?: TFieldValue): TUseHandlers<T> => {
  const field = useContext(FieldContext);
  const modal = useContext(ValueContext);
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
      value && modal.update({ ...modal.state, isVisible: true, data: value });
    });
  };

  const copyHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      value && modal.update({ ...modal.state, isVisible: true, data: value });
    });
  };

  const deleteHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      const data = field.state.data as TField;
      const selected = value ? [value.value] : dataView.state.selected['field-values'] || [];
      const values = data.values.filter((item) => !selected.includes(item.value));

      field.update({ ...field.state, data: { ...data, values } });
    });
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
