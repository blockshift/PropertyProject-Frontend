export interface IPageData {
  title: string;
  loaded?: true;
  breadcrumbs?: IBreadcrumb[];
  fullFilled?: boolean;
}

export interface IBreadcrumb {
  title: string;
  route?: string;
}
