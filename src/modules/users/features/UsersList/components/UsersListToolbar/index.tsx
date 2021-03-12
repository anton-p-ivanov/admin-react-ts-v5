import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Button, DataToolbar, Icon } from 'components';
import Context from 'store';

import { useHandlers } from '../../hooks';
import { TUsersListToolbar } from './types';

const UsersListToolbar: React.FC<TUsersListToolbar> = ({ isRowsSelected = false }) => {
  const { listView } = useContext(Context);
  const handlers = useHandlers();
  const search = <DataToolbar.Search onSearch={handlers.search} />;

  return (
    <DataToolbar total={listView.state.pagination.total} search={search}>
      <div className="data-toolbar__group">
        <div className="data-toolbar__item">
          <Link to={`/users/create`} className="btn btn--success">
            Создать
          </Link>
        </div>
      </div>
      <div className="data-toolbar__group">
        <div className="data-toolbar__item">
          <Button isIcon={true} isDisabled={!isRowsSelected} onClick={handlers.delete}>
            <Icon name="trash-2" title="Удалить" />
          </Button>
        </div>
        <div className="data-toolbar__item">
          <Button isIcon={true} onClick={handlers.refresh}>
            <Icon name="refresh-cw" title="Обновить" />
          </Button>
        </div>
      </div>
    </DataToolbar>
  );
};

export default UsersListToolbar;
