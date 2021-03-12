import React from 'react';

import { DataRow, DataHeader, DataSort } from './components';
import { TDataTableProps } from './types';

import './styles.scss';

type TDataTable = React.FC<TDataTableProps> & {
  Row: typeof DataRow;
  Header: typeof DataHeader;
  Sort: typeof DataSort;
};

const DataTable: TDataTable = (props) => {
  const { columns, children } = props;

  return (
    <div className="data-table">
      <table className="data-table__table">
        <colgroup>
          {columns.map((column) => (
            <col key={`data-column-${column.name}`} className={`data-table__col data-table__col--${column.name}`} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {columns.map((column) => (
              <DataHeader column={column} key={`data-header-${column.name}`} />
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

DataTable.Row = DataRow;
DataTable.Header = DataHeader;
DataTable.Sort = DataSort;

export default DataTable;
