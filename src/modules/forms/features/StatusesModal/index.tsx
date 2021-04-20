import React, { useContext } from 'react';

import { Button, Icon } from 'components';
import Tabs from 'components/Tabs';
import ModalView from 'features/ModalView';

import Context from './context';
import defaults from './defaults';
import { useHandlers } from './hooks';
import tabs from './tabs';

import './styles.scss';

const StatusesModal: React.FC = () => {
  const { dismiss, confirm } = useHandlers();
  const { state } = useContext(Context);

  return (
    <ModalView name={`form-status`} isVisible={state.isVisible} variant={state.isValid ? 'info' : 'danger'}>
      <div className="modal__header">
        <div className="modal__heading">Настройка статуса веб-формы</div>
        <div className="modal__close">
          <Button isIcon={true} size="small" onClick={dismiss}>
            <Icon name="x" title="Закрыть" />
          </Button>
        </div>
      </div>
      <div className="modal__body">
        <Tabs items={tabs} />
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

export default StatusesModal;
