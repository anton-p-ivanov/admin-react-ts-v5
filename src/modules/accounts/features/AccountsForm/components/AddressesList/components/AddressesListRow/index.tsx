import React from 'react';

import { Form } from 'components';

import { AddressesListContext } from '../';
import { types } from '../../../AddressesTab/types';
import { TAddressesListRowProps } from './types';

const AddressesListRow: React.FC<TAddressesListRowProps> = (props) => {
  const { data, isSelected = false, onSelect } = props;
  const address = [data.country, data.zip, data.region, data.city, data.street].join(', ');

  return (
    <>
      <td>
        <Form.Input.Checkbox name={`selector`} value={data.uuid} isSelected={isSelected} onSelect={onSelect} />
      </td>
      <td className="data-table__cell data-table__cell--type">
        {types.find((type) => type.value === data.type)?.label}
      </td>
      <td>{address}</td>
      <td className="data-table__cell data-table__cell--context">
        <AddressesListContext data={data} />
      </td>
    </>
  );
};

export default AddressesListRow;
