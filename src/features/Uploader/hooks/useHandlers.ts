import React, { useEffect, useContext } from 'react';

import { v4 } from 'uuid';

import API from 'utils/api';

import Context from '../context';
import { INITIAL_DATA, TUploaderData } from '../types';

type TUseHandlers = {
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dismiss: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CHUNK_SIZE = 1048576 / 2;

const useHandlers = (url: string): TUseHandlers => {
  const { state, update, reset, onComplete } = useContext(Context);
  const data = state.data as TUploaderData;

  useEffect(() => {
    if (data.files) {
      update({ ...state, data: { ...data, index: 0 } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(data.files)]);

  useEffect(() => {
    data.files && data.files[data.index] && upload(data.files[data.index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.index]);

  useEffect(() => {
    data.uuid && data.chunks > 0 && _uploadNextChunk(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.uuid]);

  const upload = (File: File) => {
    const chunks = File.size % CHUNK_SIZE == 0 ? File.size / CHUNK_SIZE : Math.floor(File.size / CHUNK_SIZE) + 1;
    const uuid = v4().toString();
    const progress = 0;

    update({ ...state, data: { ...data, progress, uuid, chunks } });
  };

  const _uploadNextChunk = (chunkID: number) => {
    const File = data.files && data.files[data.index];
    if (!File) return;

    const Chunk = File.slice(chunkID * CHUNK_SIZE, (chunkID + 1) * CHUNK_SIZE);

    const formData = new FormData();
    formData.append('file', Chunk);
    formData.append('fileUuid', data.uuid as string);

    API.request({ method: 'POST', url, data: formData })
      .then(() => {
        update({ ...state, data: { ...data, progress: Math.ceil((chunkID * 100) / data.chunks) } });
        if (chunkID < data.chunks) {
          _uploadNextChunk(chunkID + 1);
        } else {
          _uploadCompleted();
        }
      })
      .catch(() => _uploadFailed());
  };

  const _uploadFailed = () => {
    update({
      ...state,
      isValid: false,
      data: { ...INITIAL_DATA, isCompleted: true },
    });
  };

  const _uploadCompleted = () => {
    const File = data.files && data.files[data.index];
    if (!File) return;

    const headers = {
      'x-upload-complete': true,
    };

    const formData = new FormData();
    formData.append('fileUuid', data.uuid as string);
    formData.append('fileName', File.name);
    formData.append('fileSize', File.size.toString());

    API.request({ method: 'POST', url, data: formData, headers }).then(() => {
      const isCompleted = data.files && data.files.length === data.index + 1;

      update({
        ...state,
        isValid: true,
        data: { ...data, isCompleted, index: data.index + 1 },
      });

      if (isCompleted) {
        onComplete && onComplete();
      }
    });
  };

  return {
    change: (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        update({ ...state, data: { ...state.data, files: event.target.files }, isVisible: true });
      }
    },
    dismiss: (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      reset();
    },
  };
};

export default useHandlers;
