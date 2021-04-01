import { useContext } from 'react';

import { TFormFields } from 'components/Form/types';
import { Context } from 'features/FormView';
import { TTrainingCourse } from 'modules/training/config/types';
import Store from 'store';

type TUseFieldsProps = () => TFormFields;

/**
 * useFields hook
 */
const useFields: TUseFieldsProps = () => {
  const { fields } = useContext(Context);
  const { formView } = useContext(Store);
  const course = formView.state.data as TTrainingCourse;

  fields.workflow = {
    ...fields.workflow,
    value: course.workflow,
    onChange: (status: string | string[]) => {
      formView.update({ ...formView.state, data: { ...course, workflow: { ...course.workflow, status } } });
    },
  };

  return fields;
};

export default useFields;
