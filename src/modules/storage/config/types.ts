import { TSite, TWorkflow } from 'config/types';
import { TUser } from 'modules/users/config/types';

export type TStorageTree = {
  [key: string]: unknown;
  uuid: string;
  storage: TStorage;
};

export type TStorage = {
  [key: string]: unknown;
  uuid: string;
  title: string;
  description: string;
  content: string;
  author: string;
  type: string;
  isDirectory: boolean;
  parentNode: string;
  file?: TStorageFile;
  workflow?: TWorkflow;
};

export type TStorageVersion = TStorageFile & {
  isActive: boolean;
};

export type TStorageFile = {
  [key: string]: unknown;
  uuid: string;
  name: string;
  size: number;
  imageWidth: number;
  imageHeight: number;
  mime: string;
  hash: string;
  workflow?: TWorkflow;
};

export type TStorageRequest = {
  [key: string]: unknown;
  storage: TStorage;
  user: TUser;
  site: TSite;
  status: 0 | 1 | 2;
  validDate: string;
  issueDate: string;
};
