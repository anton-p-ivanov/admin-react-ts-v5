import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Form, DateFormat } from 'components';

import { CatalogsListContext } from '../';
import Context from '../../context';
import { TCatalogsListRowProps } from './types';

const CatalogsListRow: React.FC<TCatalogsListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;
  const { types } = useContext(Context);
  const workflow = data.workflow;

  const type = types.find((type) => type.value === data.type);

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>
        <Link to={`/admin/catalogs/${data.uuid}/edit`}>{data.title}</Link>
      </td>
      <td>{type ? type.label : <em>нет данных</em>}</td>
      <td>{data.sort}</td>
      <td>{workflow ? <DateFormat value={workflow.updatedAt} /> : <em>нет данных</em>}</td>
      <td className="data-table__cell data-table__cell--context">
        <CatalogsListContext data={data} />
      </td>
    </>
  );
};

export default CatalogsListRow;
