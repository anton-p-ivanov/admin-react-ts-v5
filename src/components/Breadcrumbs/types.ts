export type TBreadcrumb = {
  title: string;
  url?: string;
};

export type TBreadcrumbs = TBreadcrumb[];

export type TBreadcrumbsProps = {
  breadcrumbs: TBreadcrumb[];
};
