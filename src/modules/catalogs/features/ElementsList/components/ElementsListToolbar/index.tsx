import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Button, DataToolbar, DropDown, Icon } from 'components';
import Store from 'store';

import { ElementsListPath } from '../';
import { useHandlers } from '../../hooks';
import { TElementsListToolbarProps } from './types';

const ElementsListToolbar: React.FC<TElementsListToolbarProps> = ({ isRowsSelected = false }) => {
  const { uuid } = useParams();
  const { listView } = useContext(Store);
  const handlers = useHandlers();

  const search = <DataToolbar.Search onSearch={handlers.search} />;
  const toggle = (
    <span className={`btn btn--success`}>
      <span>Создать</span>
      <Icon name={`chevron-down`} variant={`sm`} />
    </span>
  );

  return (
    <>
      <DataToolbar total={listView.state.pagination.total} search={search}>
        <div className="data-toolbar__group">
          <div className="data-toolbar__item">
            <DropDown toggle={toggle} variant={`left`}>
              <DropDown.Link route={`/catalogs/elements/${uuid}/create?type=E`}>Новый элемент</DropDown.Link>
              <DropDown.Link route={`/catalogs/elements/${uuid}/create?type=S`}>Новый раздел</DropDown.Link>
            </DropDown>
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
      <div className={`elements-list__path`}>
        <ElementsListPath node={uuid} />
      </div>
    </>
  );
};

export default ElementsListToolbar;
