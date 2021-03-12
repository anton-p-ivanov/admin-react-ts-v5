import React, { useContext } from 'react';

import { Button, DataToolbar, Icon } from 'components';
import Store from 'store';

import { useHandlers } from '../../hooks';
import { TVersionsListToolbarProps } from './types';

const VersionsListToolbar: React.FC<TVersionsListToolbarProps> = () => {
  const { listView } = useContext(Store);
  const handlers = useHandlers();

  return (
    <DataToolbar total={listView.state.pagination.total}>
      <div className="data-toolbar__group">
        <div className="data-toolbar__item">
          <Button type="button" size="small" onClick={handlers.upload}>
            Добавить версию
          </Button>
        </div>
      </div>
      <div className="data-toolbar__group">
        <div className="data-toolbar__item">
          <Button isIcon={true} size="small" onClick={handlers.refresh}>
            <Icon name="refresh-cw" title="Обновить" />
          </Button>
        </div>
      </div>
    </DataToolbar>
  );
};

export default VersionsListToolbar;
