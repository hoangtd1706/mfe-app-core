import * as React from "react";
import { useAppContext } from "../contexts/app.context";
import { ArrowLeftOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Button from "antd/es/button";
import Space from "antd/es/space";
import { useNavigate } from "react-router-dom";
import Typography from "antd/es/typography";
import { AppBarStl } from "./style";

export default function AppBar(): JSX.Element {
  const { openMenu, screenTitle, toggleMenu } = useAppContext();

  const navigate = useNavigate();

  return (
    <AppBarStl.Wrap $openMenu={openMenu}>
      <Button
        size="small"
        type={openMenu ? "primary" : "default"}
        onClick={toggleMenu}
        icon={<MenuFoldOutlined rotate={openMenu ? 0 : 180} />}
      />
      {screenTitle !== undefined ? (
        <>
          {screenTitle.isBackTo !== undefined && (
            <Button
              size="small"
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate(`${screenTitle.isBackTo}`)}
            >
              Quay lại
            </Button>
          )}
          <AppBarStl.ScreenTitle>
            <Typography.Title level={5}>{screenTitle.title}</Typography.Title>
          </AppBarStl.ScreenTitle>
          {screenTitle.actions !== undefined && (
            <Space>
              {screenTitle.actions.map((action, i) => (
                <Button
                  key={i}
                  size="small"
                  type={action.type ?? "default"}
                  icon={action.icon}
                  onClick={() => action.onClick()}
                >
                  {action.title}
                </Button>
              ))}
            </Space>
          )}
        </>
      ) : (
        <></>
      )}
    </AppBarStl.Wrap>
  );
}
