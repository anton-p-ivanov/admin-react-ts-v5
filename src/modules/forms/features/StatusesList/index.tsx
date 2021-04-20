import React, { useContext } from 'react';

import DataView from 'features/DataView';
import { useModal } from 'features/ModalView';
import { TForm } from 'modules/forms/config/types';
import Store from 'store';

import StatusesModal, { Context } from '../StatusesModal';
import { templates, columns } from './props';

const StatusesList: React.FC = () => {
  const modal = useModal();
  const { formView } = useContext(Store);
  const form = formView.state.data as TForm;

  return (
    <Context.Provider value={modal}>
      <DataView data={form.statuses} columns={columns} templates={templates} variant={`form-statuses`} />
      <StatusesModal />
    </Context.Provider>
  );
};

export default StatusesList;
