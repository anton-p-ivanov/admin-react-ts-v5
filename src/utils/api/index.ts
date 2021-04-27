import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TFetchResult = any;

export type TLookupResult = {
  value: string;
  label: string;
};

const _axios = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

_axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (401 === error.response.status) {
      localStorage.removeItem('token');
    }

    return Promise.reject(error);
  },
);

const API = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: (config: AxiosRequestConfig): Promise<AxiosResponse<any>> => {
    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    return _axios.request({ ...config, headers: { ...(config.headers || {}), ...headers } });
  },

  lookup: async (url: string, search?: string): Promise<TLookupResult[]> => {
    const headers = {
      'X-Request-Lookup': 'true',
      'X-Search-Conditions': JSON.stringify({
        term: encodeURI(search || ''),
      }),
    };

    const response = await API.request({ url, headers }).then((response) => response.data);

    return response.map((result: TLookupResult) => {
      return {
        value: result.value,
        label: result.label,
      };
    });
  },
};

export default API;
