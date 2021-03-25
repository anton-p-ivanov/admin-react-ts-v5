import React, { useContext } from 'react';

import { Button, Form, Icon } from 'components';
import ModalView from 'features/ModalView';

import Context from './context';
import defaults from './defaults';
import { useHandlers, useFields } from './hooks';
import { TValuesModalProps } from './types';

const ValuesModal: React.FC<TValuesModalProps> = ({ field }) => {
  const { dismiss, confirm } = useHandlers(field);
  const { state } = useContext(Context);
  const fields = useFields();

  return (
    <ModalView name={`field-value`} isVisible={state.isVisible} variant={state.isValid ? 'info' : 'danger'}>
      <div className="modal__header">
        <div className="modal__heading">Настройка значения поля</div>
        <div className="modal__close">
          <Button isIcon={true} size="small" onClick={dismiss}>
            <Icon name="x" title="Закрыть" />
          </Button>
        </div>
      </div>
      <div className="modal__body">
        <Form.Field field={fields.label} variant={`horizontal`} />
        <Form.Field field={fields.value} variant={`horizontal`} />
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
export default ValuesModal;
