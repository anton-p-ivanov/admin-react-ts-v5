import { useContext } from 'react';

import { TFormFields } from 'components/Form/types';
import { Context } from 'features/FormView';
import { TCatalogElement } from 'modules/catalogs/config/types';
import Store from 'store';

type TUseFieldsProps = () => TFormFields;

/**
 * useFields hook
 */
const useFields: TUseFieldsProps = () => {
  const { fields } = useContext(Context);
  const { formView } = useContext(Store);
  const element = formView.state.data as TCatalogElement;

  fields.workflow = {
    ...fields.workflow,
    value: element.workflow,
    onChange: (status: string | string[]) => {
      formView.update({ ...formView.state, data: { ...element, workflow: { ...element.workflow, status } } });
    },
  };

  return fields;
};

export default useFields;
