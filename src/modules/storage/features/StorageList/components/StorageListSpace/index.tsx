import React, { useEffect, useState } from 'react';

import fileSize from 'filesize';

import API from 'utils/api';

import { TStorageListPathState } from './types';

import './styles.scss';

const StorageListSpace: React.FC = () => {
  const [state, setState] = useState<TStorageListPathState>({
    space: { free: 0, total: 0 },
    isFetching: false,
  });

  useEffect(() => {
    setState({ ...state, isFetching: true });

    API.request({ url: `/storage/space` }).then((response) => {
      setState({ ...state, space: response.data, isFetching: false });
    });

    return () => setState({ ...state, isFetching: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CalcInProgress = <>Идёт вычисление ...</>;
  const AvailableSpace = (
    <>
      Свободно {fileSize(state.space.free)} из {fileSize(state.space.total)}
    </>
  );

  return <div className={`storage-space`}>{state.isFetching ? CalcInProgress : AvailableSpace}</div>;
};

export default StorageListSpace;
