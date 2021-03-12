import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TFetchResult = any;

export type TLookupResult = {
  value: string;
  label: string;
};

const _axios = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const API = {
  request: _axios.request,

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
