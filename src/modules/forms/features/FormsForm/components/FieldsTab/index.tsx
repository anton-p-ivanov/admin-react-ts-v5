import React, { useContext } from 'react';

import FieldsList from 'modules/fields/features/FieldsList';
import { TForm } from 'modules/forms/config/types';
import Store from 'store';

const FieldsTab: React.FC = () => {
  const { formView } = useContext(Store);
  const form = formView.state.data as TForm;

  return (
    <>
      <h2>Поля веб-формы</h2>
      <p>Список полей, отображаемых пользователям при заполнении веб-формы.</p>
      {formView.state.errors.fields && <div className="form__error">{formView.state.errors.fields.join('<br>')}</div>}
      <FieldsList fields={form.fields} />
    </>
  );
};

export default FieldsTab;
