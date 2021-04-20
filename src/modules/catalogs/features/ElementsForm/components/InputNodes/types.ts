import { TLookupResult } from 'utils/api';

export type TInputNodesProps = {
  root: string;
  isMultiple?: boolean;
  value?: string[];
  onChange?: (value: string[]) => void;
};

export type TInputNodesStateItem = TLookupResult & {
  level: number;
};

export type TInputNodesState = TInputNodesStateItem[];
