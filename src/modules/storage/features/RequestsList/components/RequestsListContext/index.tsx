import React from 'react';

import { DropDown, Icon } from 'components';

import { useHandlers } from '../../hooks';
import { TRequestsListContextProps } from './types';

const RequestsListContext: React.FC<TRequestsListContextProps> = ({ data }) => {
  const handlers = useHandlers(data);

  return (
    <DropDown toggle={<Icon name="menu" title="Выберите действие" />}>
      <DropDown.Button onClick={handlers.grant} isDisabled={data.status === 1}>
        {data.isValid ? `Изменить доступ` : `Выдать доступ`}
      </DropDown.Button>
      <DropDown.Button onClick={handlers.withdraw} isDisabled={data.status !== 1}>
        Отозвать доступ
      </DropDown.Button>
    </DropDown>
  );
};

export default RequestsListContext;
