import React from 'react';

import ListView from 'features/ListView';

import { conditions, templates, columns } from './props';

const FormsList: React.FC = () => {
  return <ListView endpoint={`GET:/forms`} columns={columns} templates={templates} conditions={conditions} />;
};

export default FormsList;
