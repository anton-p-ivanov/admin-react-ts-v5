export type TElementsListPathItem = {
  uuid: string;
  title: string;
};

export type TElementsListPathState = TElementsListPathItem[];

export type TElementsListPathProps = {
  node: string;
};
