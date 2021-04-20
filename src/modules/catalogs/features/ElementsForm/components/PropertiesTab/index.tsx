import React, { useContext, useEffect, useState } from 'react';

import { TCatalogElement } from 'modules/catalogs/config/types';
import { TField } from 'modules/fields/config/types';
import Store from 'store';
import API from 'utils/api';

import InputProperty from '../InputProperty';

const PropertiesTab: React.FC = () => {
  const { formView } = useContext(Store);
  const [fields, setFields] = useState<TField[]>([]);
  const data = formView.state.data as TCatalogElement;

  useEffect(() => {
    API.request({ url: `/catalogs/${data.catalog}` }).then((response) => setFields(response.data.fields));
  }, [data.catalog]);

  return (
    <>
      <h2>Свойства элемента</h2>
      {fields.map((field) => (
        <InputProperty key={field.uuid} field={field} />
      ))}
    </>
  );
};

export default PropertiesTab;
