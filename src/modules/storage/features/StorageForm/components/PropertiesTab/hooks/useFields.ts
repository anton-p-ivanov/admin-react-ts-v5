import { useContext } from 'react';

import { TFormFields } from 'components/Form/types';
import { Context } from 'features/FormView';
import { TStorage } from 'modules/storage/config/types';
import Store from 'store';

type TUseFieldsProps = () => TFormFields;

/**
 * useFields hook
 */
const useFields: TUseFieldsProps = () => {
  const { fields } = useContext(Context);
  const { formView } = useContext(Store);
  const storage = formView.state.data as TStorage;

  fields.workflow = {
    ...fields.workflow,
    value: storage.workflow,
    onChange: (status: string | string[]) => {
      formView.update({ ...formView.state, data: { ...storage, workflow: { ...storage.workflow, status } } });
    },
  };

  return fields;
};

export default useFields;
