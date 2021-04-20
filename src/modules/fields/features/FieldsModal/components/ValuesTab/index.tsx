import React, { useContext } from 'react';

import { TField } from 'modules/fields/config/types';
import ValuesList from 'modules/fields/features/ValuesList';

import Context from '../../context';

const ValuesTab: React.FC = () => {
  const modal = useContext(Context);
  const field = modal.state.data as TField;

  return (
    <>
      <h2>Список значений</h2>
      <ValuesList field={field} />
    </>
  );
};

export default ValuesTab;
