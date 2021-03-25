import React, { useContext } from 'react';

import { Button, Tabs, Icon } from 'components';
import ModalView from 'features/ModalView';
import { TField } from 'modules/fields/config/types';

import Context from './context';
import defaults from './defaults';
import { useHandlers } from './hooks';
import tabs from './tabs';

import './styles.scss';

const FieldsModal: React.FC = () => {
  const { dismiss, confirm } = useHandlers();
  const { state } = useContext(Context);
  const field = state.data as TField;

  return (
    <ModalView name={`field`} isVisible={state.isVisible} variant={state.isValid ? 'info' : 'danger'}>
      <div className="modal__header">
        <div className="modal__heading">Настройка поля</div>
        <div className="modal__close">
          <Button isIcon={true} size="small" onClick={dismiss}>
            <Icon name="x" title="Закрыть" />
          </Button>
        </div>
      </div>
      <div className="modal__body">
        <Tabs items={tabs} disabled={['C', 'D'].indexOf(field.type) === -1 ? ['field-values'] : []} />
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

export { Context, defaults };
export default FieldsModal;
