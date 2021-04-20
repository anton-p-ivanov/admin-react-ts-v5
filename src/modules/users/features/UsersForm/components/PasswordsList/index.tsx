import React from 'react';

import DataView from 'features/DataView';

import * as props from './props';
import { TPasswordsListProps } from './types';

const PasswordsList: React.FC<TPasswordsListProps> = ({ passwords }) => {
  return <DataView data={passwords} columns={props.columns} templates={props.templates} variant={`passwords`} />;
};

export default PasswordsList;
