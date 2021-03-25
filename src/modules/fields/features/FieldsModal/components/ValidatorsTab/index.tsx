import React, { useContext } from 'react';

import { TField } from 'modules/fields/config/types';
import ValidatorsList from 'modules/fields/features/ValidatorsList';

import Context from '../../context';

const ValidatorsTab: React.FC = () => {
  const modal = useContext(Context);
  const field = modal.state.data as TField;

  return (
    <>
      <h2>Правила валидации</h2>
      <ValidatorsList field={field} />
    </>
  );
};

export default ValidatorsTab;
