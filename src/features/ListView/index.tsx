import React, { useContext, useEffect } from 'react';

import { Pagination } from 'components';
import { TDataColumn } from 'components/DataTable/types';
import DataView from 'features/DataView';
import Store from 'store';

import * as Types from './types';

import './styles.scss';

const ListView: React.FC<Types.TListViewProps> = (props) => {
  const { endpoint, templates, columns, id = 'list-view', conditions, children } = props;
  const { listView } = useContext(Store);
  const { state, update, request } = listView;

  const sortBy: string = state.sort || conditions.sort;
  const params: Types.TListViewConditions = {
    endpoint,
    page: state.pagination.page || 1,
    size: conditions.size,
    sort: sortBy,
    search: encodeURI(state.search),
    filter: state.filter,
  };

  const deps = JSON.stringify(params);

  const mapper = (column: TDataColumn) => {
    const sort = {
      field: sortBy,
      handler: (sort?: string): void => {
        update({ ...state, sort: sort || '-' });
      },
    };

    return { ...column, sort };
  };

  const pagination = {
    pages: Math.ceil(state.pagination.total / (state.pagination.size || 1)),
    page: state.pagination.page,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => request(params), [deps, state._timestamp]);

  return (
    <div id={id}>
      <DataView data={state.data} templates={templates} columns={columns.map(mapper)} variant={id} />
      {pagination.pages > 1 && <Pagination {...pagination} />}
      {children}
    </div>
  );
};

export default ListView;
