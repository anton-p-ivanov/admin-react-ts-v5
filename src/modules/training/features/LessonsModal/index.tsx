import React, { useContext } from 'react';

import { Button, Tabs, Icon } from 'components';
import ModalView from 'features/ModalView';

import Context from './context';
import { lesson } from './defaults';
import { useHandlers } from './hooks';
import tabs from './tabs';

import './styles.scss';

const LessonsModal: React.FC = () => {
  const { dismiss, confirm } = useHandlers();
  const { state } = useContext(Context);

  return (
    <ModalView name={`training-lesson`} isVisible={state.isVisible} variant={state.isValid ? 'info' : 'danger'}>
      <div className="modal__header">
        <div className="modal__heading">Настройка урока</div>
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
          Подтвердить
        </Button>
      </div>
    </ModalView>
  );
};

export { Context, lesson as defaults };
export default LessonsModal;
