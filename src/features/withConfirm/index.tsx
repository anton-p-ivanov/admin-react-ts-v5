import React from 'react';

import ConfirmModal, { Context } from 'features/ConfirmModal';
import { useModal } from 'features/ModalView';

function withConfirm<T>(Component: React.ComponentType<T>): React.FC<T> {
  return (props: T) => {
    const confirm = useModal();

    return (
      <Context.Provider value={confirm}>
        <Component {...props} />
        <ConfirmModal />
      </Context.Provider>
    );
  };
}

export default withConfirm;
