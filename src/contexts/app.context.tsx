import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { AppContext, ScreeTitleType } from "./type";
import useWindowSize, { DeviceType } from "../utils/useWindowSize";
import { IMe, IUser } from "../types";

type Props = PropsWithChildren & {
  appVersion: string | undefined;
  serviceVersion: string | undefined;
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
  const [me, setMe] = useState<IMe | undefined>(undefined);
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

  const refreshApp = () => {
    try {
      const json = localStorage.getItem("vmis.platform.web") ?? "{}";
      setMe(JSON.parse(json) as IMe);
    } catch (error) {
      console.log("Cannot get my profile in storage vmis.platform.web", error);
      setMe(undefined);
    }
  };

  useEffect(() => {
    handleChangePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.hash]);

  useEffect(() => {
    setDeviceType(windowSize.width > 1000 ? "desktop" : "mobile");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize.width]);

  useEffect(() => {
    refreshApp();
  }, []);

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

        me: me,
        setMe: setMe,

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
