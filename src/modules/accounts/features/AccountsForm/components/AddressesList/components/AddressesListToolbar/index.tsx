import React, { useContext } from 'react';

import { Button, DataToolbar, Icon } from 'components';
import Context from 'store';

import { useHandlers } from '../../hooks';
import { TAddressesListToolbarProps } from './types';

const AddressesListToolbar: React.FC<TAddressesListToolbarProps> = ({ isRowsSelected = false }) => {
  const handlers = useHandlers();
  const { dataView } = useContext(Context);

  return (
    <DataToolbar total={dataView.state.data.length}>
      <div className="data-toolbar__group">
        <div className="data-toolbar__item">
          <Button type="button" size="small" onClick={handlers.create}>
            Добавить
          </Button>
        </div>
      </div>
      <div className="data-toolbar__group">
        <div className="data-toolbar__item">
          <Button isIcon={true} size="small" isDisabled={!isRowsSelected} onClick={handlers.delete}>
            <Icon name="trash-2" title="Удалить" />
          </Button>
        </div>
        <div className="data-toolbar__item">
          <Button isIcon={true} size="small" onClick={handlers.refresh}>
            <Icon name="refresh-cw" title="Обновить" />
          </Button>
        </div>
      </div>
    </DataToolbar>
  );
};

export default AddressesListToolbar;
