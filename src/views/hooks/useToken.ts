import { useState } from 'react';

type TUseToken = {
  token: string;
  setToken: (token: string) => void;
};

const useToken = (): TUseToken => {
  const getToken = (): string => {
    return localStorage.getItem('token') || '';
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (token: string) => {
    localStorage.setItem('token', token);
    localStorage.removeItem('tokenExpired');
    setToken(token);
  };

  return {
    setToken: saveToken,
    token,
  };
};

export default useToken;
