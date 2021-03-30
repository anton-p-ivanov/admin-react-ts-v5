import React, { useContext } from 'react';

import { TMailTemplate } from 'config/types';
import MailView from 'features/MailView';
import { TMailViewState } from 'features/MailView/types';
import { TForm } from 'modules/forms/config/types';
import Context from 'store';

const MailTab: React.FC = () => {
  const { formView } = useContext(Context);
  const form = formView.state.data as TForm;

  const reducer = {
    state: {
      data: form.mailTemplate as TMailTemplate,
      errors: formView.state.errors,
    },
    update: (state: TMailViewState) => {
      const data = { ...form, mailTemplate: state.data };
      formView.update({ ...formView.state, data });
    },
  };

  return (
    <>
      <h2>Настройка почтового шаблона</h2>
      <MailView reducer={reducer} />
    </>
  );
};

export default MailTab;
