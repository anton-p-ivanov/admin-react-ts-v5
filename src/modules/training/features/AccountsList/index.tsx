import React, { useContext } from 'react';

import { DataTable, Button, Icon } from 'components';
import { TTrainingCourse } from 'modules/training/config/types';
import Context from 'store';

import { columns } from './props';
import { TAccountsListProps } from './types';

import './styles.scss';

const AccountsList: React.FC<TAccountsListProps> = ({ accounts }) => {
  const { formView } = useContext(Context);
  const course = formView.state.data as TTrainingCourse;

  const onClick = (item: string) => {
    const accounts = course.accounts.filter((m) => m !== item);
    formView.update({ ...formView.state, data: { ...course, accounts } });
  };

  return (
    <div className={`training-course-accounts-list`}>
      <DataTable columns={columns}>
        {accounts.length === 0 && (
          <DataTable.Row>
            <td colSpan={columns.length}>Элементы не найдены</td>
          </DataTable.Row>
        )}
        {accounts.map((item) => {
          return (
            <DataTable.Row key={item.value}>
              <td>{item ? item.label : <em>Неизвестный контрагент</em>}</td>
              <td>
                <Button isIcon={true} size={`small`} onClick={() => onClick(item.value)}>
                  <Icon name={`x`} />
                </Button>
              </td>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </div>
  );
};

export default AccountsList;
