import * as React from "react";
import { MenuStl } from "./style";
import { IModule } from "../types";
import Space from "antd/es/space";
import { ApiOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useAppContext } from "../contexts/app.context";

type Props = {
  modules: IModule[];
};

export default function Menu({ modules }: Props): JSX.Element {
  const { appInfo } = useAppContext();

  return (
    <MenuStl.Wrap>
      <MenuStl.Content>
        {modules.map((module, i) => (
          <MenuStl.ModuleWrap key={i}>
            <MenuStl.ModuleName>{module.name}</MenuStl.ModuleName>
            {module.menu.map((menu) => (
              <MenuStl.Item
                to={`${module.path === "" ? module.path : `${module.path}/`}${
                  menu.path
                }`}
                key={`${menu.path}${i}`}
              >
                <span>{menu.name}</span>
              </MenuStl.Item>
            ))}
          </MenuStl.ModuleWrap>
        ))}
      </MenuStl.Content>
      <MenuStl.Footer>
        {appInfo.serviceVersion && (
          <Space>
            <ApiOutlined />
            <MenuStl.FooterText>{appInfo.serviceVersion}</MenuStl.FooterText>
          </Space>
        )}

        {appInfo.appVersion && (
          <Space>
            <AppstoreOutlined />
            <MenuStl.FooterText>{appInfo.appVersion}</MenuStl.FooterText>
          </Space>
        )}
      </MenuStl.Footer>
    </MenuStl.Wrap>
  );
}
