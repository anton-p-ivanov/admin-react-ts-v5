import React, { useContext } from 'react';

import { TAccount, TAddress } from 'modules/accounts/config/types';
import Store from 'store';

import { Context } from '../../AddressesModal';

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
const useHandlers = <T>(address?: TAddress): TUseHandlers<T> => {
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
      address && modal.update({ ...modal.state, isVisible: true, data: address });
    });
  };

  const copyHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      address && modal.update({ ...modal.state, isVisible: true, data: { ...address, uuid: '' } });
    });
  };

  const deleteHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      const account = formView.state.data as TAccount;
      const selected = address ? [address.uuid] : dataView.state.selected;
      const addresses = account.addresses.filter((item) => !selected.includes(item.uuid));

      formView.update({ ...formView.state, data: { ...account, addresses } });
    });
  };

  const createHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => modal.update({ ...modal.state, isVisible: true }));
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
