import { TWorkflow } from 'config/types';

import { TSelectProps } from '../Select/types';

export type TInputWorkflowStatusProps = TSelectProps & {
  value?: TWorkflow;
  onChange?: (value: TWorkflow) => void;
};
