import React from 'react';

import DataView from 'features/DataView';

import * as props from './props';
import { TManagersListProps } from './types';

const ManagersList: React.FC<TManagersListProps> = ({ managers }) => {
  return <DataView data={managers} columns={props.columns} templates={props.templates} variant={`managers-list`} />;
};

export default ManagersList;
