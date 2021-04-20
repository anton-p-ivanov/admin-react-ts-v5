import React, { useContext } from 'react';

import { Button, Form, Icon } from 'components';
import ModalView from 'features/ModalView';

import Context from './context';
import defaults from './defaults';
import { useFields, useHandlers } from './hooks';

import './styles.scss';

const TypesModal: React.FC = () => {
  const { dismiss, confirm } = useHandlers();
  const { state } = useContext(Context);
  const fields = useFields();

  return (
    <ModalView name={`catalog-type`} isVisible={state.isVisible} variant={state.isValid ? 'info' : 'danger'}>
      <div className="modal__header">
        <div className="modal__heading">Тип справочника</div>
        <div className="modal__close">
          <Button isIcon={true} size="small" onClick={dismiss}>
            <Icon name="x" title="Закрыть" />
          </Button>
        </div>
      </div>
      <div className="modal__body">
        <Form.Field field={fields.title} variant={`horizontal`} />
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
export default TypesModal;
