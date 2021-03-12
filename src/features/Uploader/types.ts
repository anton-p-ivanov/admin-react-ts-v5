import { TModalContext } from 'features/ModalView/types';

export type TUploaderData = {
  files?: FileList;
  uuid?: string;
  index: number;
  chunks: number;
  progress: number;
  isCompleted: boolean;
};

export type TUploaderContext = TModalContext & {
  select: () => void;
  onComplete?: () => void;
};

export type TUploaderProps = {
  url: string;
  isMultiple?: boolean;
  onComplete?: () => void;
};

export type TUploaderModalProps = {
  url: string;
  isMultiple?: boolean;
};

export const INITIAL_DATA: TUploaderData = {
  uuid: 'none',
  index: -1,
  chunks: 0,
  progress: 0,
  isCompleted: false,
};
