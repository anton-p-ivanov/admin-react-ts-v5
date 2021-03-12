import React from 'react';

import fileSize from 'filesize';

import Form from 'components/Form';

import { StorageListContext, StorageListTitle } from '../';
import { TStorageListRowProps } from './types';

const StorageListRow: React.FC<TStorageListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;

  if (typeof data.storage === 'undefined') {
    return null;
  }

  const storage = data.storage;
  const workflow = storage.workflow;

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>
        <StorageListTitle data={data} />
      </td>
      <td>{storage.file && fileSize(storage.file.size)}</td>
      <td>{workflow ? new Date(workflow.updatedAt).toUTCString() : <em>нет данных</em>}</td>
      <td className="data-table__cell data-table__cell--context">
        <StorageListContext data={data} />
      </td>
    </>
  );
};

export default StorageListRow;
