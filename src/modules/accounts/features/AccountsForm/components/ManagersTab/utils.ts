import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { TUser } from 'modules/users/config/types';
import API from 'utils/api';

import { TManager } from './types';

export const requestManagers = async (): Promise<AxiosResponse> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/users`,
    headers: {
      'X-Search-Conditions': JSON.stringify({ sort: 'fullName' }),
      'X-Pagination-Size': 0,
    },
  };

  return await API.request(config);
};

export const mapUserToManager = (user: TUser): TManager => ({
  uuid: user.uuid,
  fullName: user.fullName,
  position: user.account?.position as string,
});
