import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { Button, DataToolbar, Icon } from 'components';
import Context from 'store';

import { StorageListPath, StorageListSpace } from '../';
import { useHandlers } from '../../hooks';
import { TStorageListToolbar } from './types';

const StorageListToolbar: React.FC<TStorageListToolbar> = ({ isRowsSelected = false }) => {
  const { listView } = useContext(Context);
  const { node } = useParams();
  const handlers = useHandlers();
  const search = <DataToolbar.Search onSearch={handlers.search} />;

  return (
    <>
      <DataToolbar total={listView.state.pagination.total} search={search}>
        <div className="data-toolbar__group">
          <div className="data-toolbar__item">
            <Button variant="success" onClick={handlers.upload}>
              Загрузить файл
            </Button>
          </div>
        </div>
        <div className="data-toolbar__group">
          <div className="data-toolbar__item">
            <Link to={node ? `/storage/${node}/create` : `/storage/create`} className="btn btn--default">
              Создать папку
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
      <div className={`storage-list__path`}>
        <StorageListPath node={node} />
        <StorageListSpace />
      </div>
    </>
  );
};

export default StorageListToolbar;
