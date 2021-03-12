export type TDataSort = {
  field: string;
  handler: (sort?: string) => void;
};

export type TDataSortProps = {
  name: string;
  sort: TDataSort;
};
