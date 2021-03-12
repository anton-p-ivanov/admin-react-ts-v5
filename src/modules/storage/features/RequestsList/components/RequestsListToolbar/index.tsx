import React, { useContext } from 'react';

import { Button, DataToolbar, Icon } from 'components';
import Store from 'store';

import { useHandlers } from '../../hooks';
import { TRequestsListToolbarProps } from './types';

const RequestsListToolbar: React.FC<TRequestsListToolbarProps> = () => {
  const { listView } = useContext(Store);
  const handlers = useHandlers();

  return (
    <DataToolbar total={listView.state.pagination.total}>
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

export default RequestsListToolbar;
