import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { TUser } from 'modules/users/config/types';
import API from 'utils/api';

export const getUsers = async (): Promise<AxiosResponse> => {
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

export const getUserDetails = async (uuid: string): Promise<TUser> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/users/${uuid}`,
  };

  const response = await API.request(config);

  return response.data;
};
