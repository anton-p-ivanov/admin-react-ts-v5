import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

import { Button, Tabs } from 'components';
import FormView from 'features/FormView';
import { TReducerData } from 'features/FormView/store/types';
import { useModal } from 'features/ModalView';

import VersionsModal, { Context as VersionsContext } from '../VersionsModal';
import defaults from './defaults';
import fields from './fields';
import { FileTabs, DirectoryTabs } from './tabs';
import { TStorageFormProps } from './types';

const StorageForm: React.FC<TStorageFormProps> = (props) => {
  const { isNewElement = false } = props;
  const { uuid, node, type = 'directory' } = useParams();
  const history = useHistory();
  const version = useModal();

  const endpoints = {
    request: uuid && `GET:/storage/${uuid}`,
    submit: isNewElement ? `POST:/storage` : `PUT:/storage/${uuid}`,
  };

  const onSubmitSucceed = (data: TReducerData) => {
    return history.push(data.parentNode ? `/storage/${data.parentNode}` : `/storage`);
  };

  return (
    <VersionsContext.Provider value={version}>
      <FormView
        endpoints={endpoints}
        fields={fields}
        defaults={{ ...defaults, parentNode: node || null }}
        onSubmitSucceed={onSubmitSucceed}
      >
        <Tabs items={type === 'directory' ? DirectoryTabs : FileTabs} />
        <FormView.Actions>
          <Link to={'/storage'} className={`btn btn--default`}>
            Отменить
          </Link>
          <Button type="submit" variant="primary">
            Сохранить
          </Button>
        </FormView.Actions>
      </FormView>
      <VersionsModal />
    </VersionsContext.Provider>
  );
};

export default StorageForm;
