import { createContext } from "react";
import { IUser } from "../types";
import { DeviceType } from "../utils/useWindowSize";

export type ActionTitleType = {
  icon?: JSX.Element;
  title: string;
  type?: "default" | "primary" | "dashed" | "link" | "text" | undefined;
  onClick: () => void;
};

export type ScreeTitleType = {
  title: string;
  actions?: ActionTitleType[];
  isBackTo?: string;
};

export interface AppStore {
  loading: boolean;
  setLoading: (loading: boolean) => void;

  deviceType: DeviceType;

  users: IUser[];
  setUsers: (u: IUser[]) => void;

  openMenu: boolean;
  toggleMenu: () => void;

  screenTitle?: ScreeTitleType;
  setScreenTitle: (v: ScreeTitleType) => void;
}

export const AppContext = createContext<AppStore>({
  loading: false,
  setLoading: () => {},

  deviceType: "desktop",

  users: [],
  setUsers: () => {},

  openMenu: true,
  toggleMenu: () => {},

  screenTitle: undefined,
  setScreenTitle: () => {},
});
