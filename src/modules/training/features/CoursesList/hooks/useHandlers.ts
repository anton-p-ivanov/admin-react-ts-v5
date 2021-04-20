import React, { useContext } from 'react';

import { Context as ConfirmContext } from 'features/ConfirmModal';
import { TTrainingCourse } from 'modules/training/config/types';
import Store from 'store';

type TUseHandlers<T> = {
  delete: (event: React.MouseEvent<T>) => void;
  refresh: (event: React.MouseEvent<T>) => void;
  search: (search: string) => void;
};

/**
 * useHandlers hook
 */
const useHandlers = <T>(course?: TTrainingCourse): TUseHandlers<T> => {
  const confirm = useContext(ConfirmContext);
  const { listView, dataView } = useContext(Store);
  const pagination = { ...listView.state.pagination, page: 1 };

  const _prevent = (event: React.MouseEvent<T>) => {
    event.preventDefault();
    return new Promise((resolve) => resolve());
  };

  const refreshHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => listView.refresh());
  };

  const deleteHandler = (event: React.MouseEvent<T>) => {
    _prevent(event).then(() => {
      confirm.update({
        ...confirm.state,
        isVisible: true,
        data: {
          endpoint: `DELETE:/training/courses`,
          onSuccess: listView.refresh,
          data: {
            items: course ? [course.uuid] : dataView.state.selected['training-courses'],
          },
        },
      });
    });
  };

  const searchHandler = (search: string) => {
    listView.update({ ...listView.state, search, pagination });
  };

  return {
    delete: deleteHandler,
    refresh: refreshHandler,
    search: searchHandler,
  };
};

export default useHandlers;
