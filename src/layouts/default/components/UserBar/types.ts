export type TLoggedInUser = {
  username: string;
  fullName: string;
};

export type TUserBarProps = {
  token: string;
};

export const INITIAL_STATE: TLoggedInUser = {
  fullName: 'Guest User',
  username: 'guest',
};
