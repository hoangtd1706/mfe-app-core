import * as React from "react";
import { MenuStl } from "./style";
import { IModule } from "../types";

type Props = {
  modules: IModule[];
};

export default function Menu({ modules }: Props): JSX.Element {
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
    </MenuStl.Wrap>
  );
}
