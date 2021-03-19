import React, { useContext } from 'react';

import { Button, Form, Icon } from 'components';
import ModalView from 'features/ModalView';

import Context from './context';
import { useFields, useHandlers } from './hooks';

import './styles.scss';

const AddressesModal: React.FC = () => {
  const { dismiss, confirm } = useHandlers();
  const { state } = useContext(Context);
  const fields = useFields();

  return (
    <ModalView name={`account-address`} isVisible={state.isVisible} variant={state.isValid ? 'info' : 'danger'}>
      <div className="modal__header">
        <div className="modal__heading">Изменение адреса</div>
        <div className="modal__close">
          <Button isIcon={true} size="small" onClick={dismiss}>
            <Icon name="x" title="Закрыть" />
          </Button>
        </div>
      </div>
      <div className="modal__body">
        <Form.Field field={fields.type} variant={`horizontal`} />
        <Form.Field field={fields.country} variant={`horizontal`} />
        <Form.Field field={fields.region} variant={`horizontal`} />
        <Form.Field field={fields.city} variant={`horizontal`} />
        <Form.Field field={fields.zip} variant={`horizontal`} />
        <Form.Field field={fields.street} variant={`horizontal`} />
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
export default AddressesModal;
