import React, { useContext } from 'react';

import { Button, DataToolbar, Icon } from 'components';
import Store from 'store';

import { useHandlers } from '../../hooks';
import { TValidatorsListToolbarProps } from './types';

const ValidatorsListToolbar: React.FC<TValidatorsListToolbarProps> = ({ isRowsSelected = false }) => {
  const handlers = useHandlers();
  const { dataView } = useContext(Store);
  const data = dataView.state.data['field-validators'];

  return (
    <DataToolbar total={data ? data.length : 0}>
      <div className="data-toolbar__group">
        <div className="data-toolbar__item">
          <Button type="button" size="small" onClick={handlers.create}>
            Добавить
          </Button>
        </div>
      </div>
      <div className="data-toolbar__group">
        <div className="data-toolbar__item">
          <Button isIcon={true} size={`small`} isDisabled={!isRowsSelected} onClick={handlers.delete}>
            <Icon name="trash-2" title="Удалить" />
          </Button>
        </div>
        <div className="data-toolbar__item">
          <Button isIcon={true} size={`small`} onClick={handlers.refresh}>
            <Icon name="refresh-cw" title="Обновить" />
          </Button>
        </div>
      </div>
    </DataToolbar>
  );
};

export default ValidatorsListToolbar;
