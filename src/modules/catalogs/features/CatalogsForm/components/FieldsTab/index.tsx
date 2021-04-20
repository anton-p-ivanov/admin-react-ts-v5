import React, { useContext } from 'react';

import { TCatalog } from 'modules/catalogs/config/types';
import FieldsList from 'modules/fields/features/FieldsList';
import Store from 'store';

const FieldsTab: React.FC = () => {
  const { formView } = useContext(Store);
  const catalog = formView.state.data as TCatalog;

  return (
    <>
      <h2>Поля каталога</h2>
      {formView.state.errors.fields && <div className="form__error">{formView.state.errors.fields.join('<br>')}</div>}
      <FieldsList fields={catalog.fields} />
    </>
  );
};

export default FieldsTab;
