import React from 'react';

import { Form } from 'components';

import { ContactsListContext } from '../';
import { TContactsListRowProps } from './types';

const ContactsListRow: React.FC<TContactsListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td>{data.fullName}</td>
      <td>{data.email}</td>
      <td>{data.position || <em>- нет данных -</em>}</td>
      <td className="data-table__cell data-table__cell--context">
        <ContactsListContext data={data} />
      </td>
    </>
  );
};

export default ContactsListRow;
