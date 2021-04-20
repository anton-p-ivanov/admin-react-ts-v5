import React, { useContext } from 'react';

import { TCatalogValue } from 'modules/catalogs/config/types';
import Store from 'store';

import Properties from './components';
import { TInputProperty, TInputPropertyProps, FIELD_TYPES } from './types';

const InputProperty: React.FC<TInputPropertyProps> = (props) => {
  const { field } = props;
  const { formView } = useContext(Store);
  const data = formView.state.data;
  const properties = (data.properties || []) as TCatalogValue[];
  const values = properties.filter((prop) => prop.field === field.uuid);
  const type = FIELD_TYPES[field.type];

  const onChange = (value: string[]) => {
    // remove previous field values
    const array = properties.filter((prop) => prop.field !== field.uuid);

    // add current field values
    if (Array.isArray(value)) {
      value.forEach((v) => {
        array.push({ field: field.uuid as string, value: v });
      });
    } else {
      array.push({ field: field.uuid as string, value });
    }

    // update state
    formView.update({ ...formView.state, data: { ...data, properties: array.filter((prop) => prop.value) } });
  };

  const property: TInputProperty<string[]> = {
    name: field.code,
    label: field.label,
    hint: field.description,
    type,
    value: values ? values.map((v) => v.value) : [],
    onChange,
  };

  const Component = Properties[type.charAt(0).toUpperCase() + type.slice(1)];

  return Component && Component({ property, field });
};

export default InputProperty;
