import React, { useContext } from 'react';

import { Button, Form, Icon } from 'components';
import ModalView from 'features/ModalView';

import Context from './context';
import defaults from './defaults';
import { useHandlers, useFields } from './hooks';
import { TValidatorsModalProps } from './types';

const ValidatorsModal: React.FC<TValidatorsModalProps> = ({ field }) => {
  const { dismiss, confirm } = useHandlers(field);
  const { state } = useContext(Context);
  const fields = useFields();

  return (
    <ModalView name={`field-validator`} isVisible={state.isVisible} variant={state.isValid ? 'info' : 'danger'}>
      <div className="modal__header">
        <div className="modal__heading">Настройка валидатора</div>
        <div className="modal__close">
          <Button isIcon={true} size="small" onClick={dismiss}>
            <Icon name="x" title="Закрыть" />
          </Button>
        </div>
      </div>
      <div className="modal__body">
        <Form.Field field={fields.type} variant={`horizontal`} />
        <Form.Field field={fields.options} variant={`horizontal`} />
        <Form.Field field={fields.sort} variant={`horizontal`} />
      </div>
      <div className="modal__footer">
        <Button onClick={dismiss}>Отменить</Button>
        <Button onClick={confirm} variant="primary">
          Сохранить
        </Button>
      </div>
    </ModalView>
  );
};

export { Context, defaults };
export default ValidatorsModal;
