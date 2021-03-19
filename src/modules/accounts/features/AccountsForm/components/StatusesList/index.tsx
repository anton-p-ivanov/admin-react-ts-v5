import React, { useEffect, useState } from 'react';

import DataView from 'features/DataView';
import { useModal } from 'features/ModalView';
import API, { TLookupResult } from 'utils/api';

import StatusesModal, { Context as StatusesContext } from '../StatusesModal';
import Context from './context';
import * as props from './props';
import { TStatusesListProps } from './types';

const StatusesList: React.FC<TStatusesListProps> = ({ statuses }) => {
  const [lookup, setLookup] = useState<TLookupResult[]>([]);
  const status = useModal();

  useEffect(() => {
    API.lookup(`/partnership/statuses/lookup`).then((statuses) => setLookup(statuses));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Context.Provider value={lookup}>
      <StatusesContext.Provider value={status}>
        <DataView data={statuses} columns={props.columns} templates={props.templates} variant={`statuses-list`} />
        <StatusesModal />
      </StatusesContext.Provider>
    </Context.Provider>
  );
};

export default StatusesList;
