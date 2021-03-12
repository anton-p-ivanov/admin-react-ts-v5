/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';

import { Context as ConfirmContext } from 'features/ConfirmModal';
import { Context as DownloaderContext } from 'features/Downloader';
import { Context as UploaderContext } from 'features/Uploader';
import { TStorageTree } from 'modules/storage/config/types';
import Store from 'store';
import API from 'utils/api';

type TUseHandlers<T> = {
  delete: (event: React.MouseEvent<T>) => void;
  refresh: (event: React.MouseEvent<T>) => void;
  search: (search: string) => void;
  upload: (event: React.MouseEvent<T>) => void;
  download: (event: React.MouseEvent<T>) => void;
};

/**
 * useHandlers hook
 */
const useHandlers = <T>(tree?: TStorageTree): TUseHandlers<T> => {
  const confirm = useContext(ConfirmContext);
  const uploader = useContext(UploaderContext);
  const downloader = useContext(DownloaderContext);
  const { listView, dataView } = useContext(Store);
  const pagination = { ...listView.state.pagination, page: 1 };

  const _prevent = (event: React.MouseEvent<T>) => {
    event.preventDefault();
    return new Promise((resolve) => resolve());
  };

  const refreshHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      listView.update({ ...listView.state });
    });
  };

  const deleteHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      confirm.update({
        ...confirm.state,
        isVisible: true,
        data: {
          endpoint: `DELETE:/storage`,
          onSuccess: listView.refresh,
          data: {
            items: tree ? [tree.uuid] : dataView.state.selected,
          },
        },
      });
    });
  };

  const uploadHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => uploader.select());
  };

  const downloadHandler = (event: React.MouseEvent<T>) => {
    tree &&
      _prevent(event).then(async () => {
        _updateDownloaderState(0);

        const object = await API.request({
          url: `/storage/${tree.storage.uuid}/download`,
          method: 'GET',
          responseType: 'blob',
          onDownloadProgress: _onDownloadProgress,
        });

        _downloadBlobObject(object.data, object.headers['x-download-filename']);
      });
  };

  const searchHandler = (search: string) => {
    listView.update({ ...listView.state, search, pagination });
  };

  /**
   * @param event
   * @private
   */
  const _onDownloadProgress = (event: any) => {
    const completed = Math.round((event.loaded * 100) / event.total);
    _updateDownloaderState(completed);
  };

  /**
   * @param completed
   * @private
   */
  const _updateDownloaderState = (completed: number) => {
    const { update, state } = downloader;

    const data = {
      isCompleted: completed === 100,
      completed,
    };

    update({ ...state, isVisible: true, data });
  };

  /**
   * @param blob
   * @param filename
   * @private
   */
  const _downloadBlobObject = (blob: Blob, filename: string) => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return {
    delete: deleteHandler,
    refresh: refreshHandler,
    search: searchHandler,
    upload: uploadHandler,
    download: downloadHandler,
  };
};

export default useHandlers;
