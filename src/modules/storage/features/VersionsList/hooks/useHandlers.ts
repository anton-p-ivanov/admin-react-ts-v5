import React, { useContext } from 'react';

import { Context as ConfirmContext } from 'features/ConfirmModal';
import { Context as DownloaderContext } from 'features/Downloader';
import { Context as UploaderContext } from 'features/Uploader';
import { TStorageVersion } from 'modules/storage/config/types';
import Store from 'store';
import API from 'utils/api';

import { Context as VersionContext } from '../../VersionsModal';

type TUseHandlers<T> = {
  edit: (event: React.MouseEvent<T>) => void;
  delete: (event: React.MouseEvent<T>) => void;
  refresh: (event: React.MouseEvent<T>) => void;
  upload: (event: React.MouseEvent<T>) => void;
  download: (event: React.MouseEvent<T>) => void;
  activate: (event: React.MouseEvent<T>) => void;
  deactivate: (event: React.MouseEvent<T>) => void;
};

/**
 * useHandlers hook
 */
const useHandlers = <T>(data?: TStorageVersion): TUseHandlers<T> => {
  const { listView } = useContext(Store);
  const confirm = useContext(ConfirmContext);
  const version = useContext(VersionContext);
  const downloader = useContext(DownloaderContext);
  const uploader = useContext(UploaderContext);

  const _prevent = (event: React.MouseEvent<T>) => {
    return new Promise((resolve) => {
      event.preventDefault();
      resolve();
    });
  };

  const editHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      version.update({ ...version.state, data, isVisible: true });
    });
  };

  const deleteHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      data &&
        confirm.update({
          ...confirm.state,
          isVisible: true,
          data: {
            endpoint: `DELETE:/storage/versions/${data.uuid}`,
            onSuccess: listView.refresh,
          },
        });
    });
  };

  const refreshHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => listView.refresh());
  };

  const uploadHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => uploader.select());
  };

  const downloadHandler = (event: React.MouseEvent<T>) => {
    data &&
      _prevent(event).then(() => {
        _updateDownloaderState(0);

        API.request({
          url: `/storage/versions/${data.uuid}/download`,
          method: 'GET',
          responseType: 'blob',
          onDownloadProgress: _onDownloadProgress,
        }).then((response) => _downloadBlobObject(response.data));
      });
  };

  const activateHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => data && _confirmAndProcess(data.uuid, `activate`));
  };

  const deactivateHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => data && _confirmAndProcess(data.uuid, `deactivate`));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _onDownloadProgress = (event: any) => {
    const completed = Math.round((event.loaded * 100) / event.total);
    _updateDownloaderState(completed);
  };

  /**
   * @param uuid
   * @param action
   * @private
   */
  const _confirmAndProcess = (uuid: string, action: string) => {
    const data = {
      endpoint: `PUT:/storage/versions/${uuid}/${action}`,
      onSuccess: () => listView.update({ ...listView.state }),
    };

    confirm.update({ ...confirm.state, isVisible: true, data });
  };

  /**
   * @param completed
   * @private
   */
  const _updateDownloaderState = (completed: number) => {
    downloader.update({
      ...downloader.state,
      isVisible: true,
      data: { filename: data && data.name, completed, isCompleted: completed === 100 },
    });
  };

  /**
   * @param blob
   * @private
   */
  const _downloadBlobObject = (blob: Blob) => {
    const link = document.createElement('a');
    link.download = data ? data.name : 'download';
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return {
    edit: editHandler,
    delete: deleteHandler,
    refresh: refreshHandler,
    upload: uploadHandler,
    download: downloadHandler,
    activate: activateHandler,
    deactivate: deactivateHandler,
  };
};

export default useHandlers;
