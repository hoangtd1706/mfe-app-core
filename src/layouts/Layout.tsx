import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import { LayoutStl } from "./style";
import { useAppContext } from "../contexts/app.context";
import AppBar from "../components/AppBar";
import { useEffect } from "react";
import { IModule } from "../types";

type Props = {
  menu: IModule[];
};

export default function MainLayout({ menu }: Props): JSX.Element {
  const navigate = useNavigate();
  const { openMenu } = useAppContext();

  const refreshRouter = () => {
    const lastUri = window.sessionStorage.getItem("lastUri");
    if (lastUri !== null) {
      navigate(
        lastUri.substring(lastUri.indexOf("#"), lastUri.length).replace("#", "")
      );
    }

    sessionStorage.removeItem("lastUri");
  };

  useEffect(() => {
    refreshRouter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutStl.Wrap $openMenu={openMenu}>
      <div></div>
      <LayoutStl.Menu $openMenu={openMenu}>
        <Menu modules={menu} />
      </LayoutStl.Menu>
      <LayoutStl.Content $openMenu={openMenu}>
        <AppBar />
        <LayoutStl.MainContent>
          <Outlet />
        </LayoutStl.MainContent>
      </LayoutStl.Content>
    </LayoutStl.Wrap>
  );
}
