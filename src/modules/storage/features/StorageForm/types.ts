export type TStorageFormProps = {
  isNewElement?: boolean;
};

export type TStorageFormContext = {
  redirectTo: string;
  setRedirectTo: (value: string) => void;
};
