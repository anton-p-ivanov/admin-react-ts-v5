import React, { useContext } from 'react';

import { TWorkflowEntity } from 'config/types';
import Store from 'store';

import './styles.scss';

const FormActions: React.FC = ({ children }) => {
  const { formView } = useContext(Store);
  const { state } = formView;
  const entity = state.data as TWorkflowEntity;

  return (
    <div className="form__actions">
      <div>
        {entity.workflow && entity.workflow.updatedAt && (
          <span className={`text--muted text--small`}>
            Обновлено {new Date(entity.workflow.updatedAt).toLocaleString()}
          </span>
        )}
      </div>
      {state.isUpdated && <div className={`text--danger`}>Требуется сохранить изменения</div>}
      <div>{children}</div>
    </div>
  );
};

export default FormActions;
