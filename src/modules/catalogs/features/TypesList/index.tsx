import React from 'react';

import ListView from 'features/ListView';
import { useModal } from 'features/ModalView';

import TypesModal, { Context } from '../TypesModal';
import * as props from './props';

const TypesList: React.FC = () => {
  const modal = useModal();

  return (
    <Context.Provider value={modal}>
      <ListView
        endpoint={`GET:/catalogs/types`}
        columns={props.columns}
        templates={props.templates}
        conditions={props.conditions}
      />
      <TypesModal />
    </Context.Provider>
  );
};

export default TypesList;
