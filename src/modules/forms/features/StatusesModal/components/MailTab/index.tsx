import React, { useContext } from 'react';

import MailView from 'features/MailView';
import { TMailViewState } from 'features/MailView/types';
import { TFormStatus } from 'modules/forms/config/types';

import Context from '../../context';

const MailTab: React.FC = () => {
  const { state, update } = useContext(Context);
  const status = state.data as TFormStatus;

  const reducer = {
    state: {
      data: status.mailTemplate,
      errors: state.errors,
    },
    update: (template: TMailViewState) => {
      const data = { ...status, mailTemplate: template.data };
      update({ ...state, data });
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
