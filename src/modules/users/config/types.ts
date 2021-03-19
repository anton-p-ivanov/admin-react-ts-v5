import { TWorkflow } from 'config/types';

export type TUser = {
  uuid: string;
  isActive?: boolean;
  fullName: string;
  email: string;
  firstName: string;
  lastName: string;
  secondName?: string;
  phone?: string;
  birthDate?: string;
  workflow?: TWorkflow;
  account?: Record<string, unknown>;
  passwords: TUserPassword[];
};

export type TUserPassword = {
  createdAt?: string;
  expiredAt?: string;
  isExpired: boolean;
};
