export type TStoragePathItem = {
  uuid: string;
  title: string;
};

export type TStorageListPathState = TStoragePathItem[];

export type TStorageListPathProps = {
  node: string;
};
