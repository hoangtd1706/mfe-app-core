export interface IApplication {
  id: string;
  appName: string;
  appIcon: string;
  description: string;
  exposedModule: string;
  remoteEntry: string;
  remoteName: string;
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
  isActive: boolean;
  isExternal: boolean;
  isAllowAll: boolean;
}

export interface IUser {
  id: string;
  mail: string;
  displayName: string;
  employeeId: string | null;
  accountEnabled: boolean;
  jobTitle: string | null;
}

export interface IMenu {
  icon?: JSX.Element;
  name: string;
  path: string;
}

export interface IModule {
  name: string;
  path: string;
  menu: IMenu[];
}
