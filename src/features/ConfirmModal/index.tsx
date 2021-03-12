import React, { useContext } from 'react';

import { Button, Form, Icon } from 'components';
import ModalView from 'features/ModalView';

import Context from './context';
import { useFields, useHandlers } from './hooks';

const ConfirmModal: React.FC = () => {
  const { dismiss, confirm } = useHandlers();
  const { password } = useFields();
  const { state } = useContext(Context);

  return (
    <ModalView name={`confirm`} isVisible={state.isVisible} variant={state.isValid ? 'info' : 'danger'}>
      <Form onSubmit={confirm}>
        <div className="modal__header">
          <div className="modal__heading">Требуется подтверждение</div>
          <div className="modal__close">
            <Button isIcon={true} size="small" onClick={dismiss}>
              <Icon name="x" title="Закрыть" />
            </Button>
          </div>
        </div>
        <div className="modal__body">
          <Form.Field field={password} />
        </div>
        <div className="modal__footer">
          <Button onClick={dismiss}>Отменить</Button>
          <Button type="submit" variant="primary">
            Подтвердить
          </Button>
        </div>
      </Form>
    </ModalView>
  );
};

export { Context };
export default ConfirmModal;
