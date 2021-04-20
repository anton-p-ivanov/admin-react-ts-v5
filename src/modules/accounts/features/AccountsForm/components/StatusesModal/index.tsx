import React, { useContext } from 'react';

import { Button, Form, Icon } from 'components';
import ModalView from 'features/ModalView';

import Context from './context';
import { useFields, useHandlers } from './hooks';

const StatusesModal: React.FC = () => {
  const { dismiss, confirm } = useHandlers();
  const { state } = useContext(Context);
  const fields = useFields();

  return (
    <ModalView name={`account-status`} isVisible={state.isVisible} variant={state.isValid ? 'info' : 'danger'}>
      <div className="modal__header">
        <div className="modal__heading">Изменение статуса</div>
        <div className="modal__close">
          <Button isIcon={true} size="small" onClick={dismiss}>
            <Icon name="x" title="Закрыть" />
          </Button>
        </div>
      </div>
      <div className="modal__body">
        <Form.Field field={fields.status} variant={`horizontal`} />
        <Form.Field field={fields.expiredAt} variant={`horizontal`} />
      </div>
      <div className="modal__footer">
        <Button onClick={dismiss}>Отменить</Button>
        <Button onClick={confirm} variant="primary">
          Подтвердить
        </Button>
      </div>
    </ModalView>
  );
};

export { Context };
export default StatusesModal;
