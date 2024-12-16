import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { AppContext, ScreeTitleType } from "./type";
import useWindowSize, { DeviceType } from "../utils/useWindowSize";
import { IUser } from "../types";

type Props = PropsWithChildren & {
  appVersion: string;
  serviceVersion: string;
};

export function AppContextProvider({
  children,
  appVersion,
  serviceVersion,
}: Props): JSX.Element {
  const windowSize = useWindowSize();
  const [loading, setLoading] = useState(true);
  const [deviceType, setDeviceType] = useState<DeviceType>(
    windowSize.width > 1000 ? "desktop" : "mobile"
  );
  const [users, setUsers] = useState<IUser[]>([]);
  const [openMenu, setOpenMenu] = useState(window.innerWidth >= 1000);
  const [screenTitle, setScreenTitle] = useState<ScreeTitleType | undefined>(
    undefined
  );
  const toggleMenu = () => setOpenMenu((pre) => !pre);

  const handleChangePage = () => {
    if (deviceType === "desktop") return;
    setOpenMenu(false);
  };

  useEffect(() => {
    handleChangePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.hash]);

  useEffect(() => {
    setDeviceType(windowSize.width > 1000 ? "desktop" : "mobile");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize.width]);

  return (
    <AppContext.Provider
      value={{
        loading: loading,
        setLoading: setLoading,

        deviceType: deviceType,

        users: users,
        setUsers: setUsers,

        openMenu: openMenu,
        toggleMenu: toggleMenu,

        screenTitle: screenTitle,
        setScreenTitle: setScreenTitle,

        appInfo: {
          appVersion: appVersion,
          serviceVersion: serviceVersion,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
