import ConfigProvider from "antd/es/config-provider";
import * as React from "react";

type Props = React.PropsWithChildren;

export default function AntdGlobalStyle({ children }: Props): JSX.Element {
  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Typography: {
            titleMarginBottom: 0,
            titleMarginTop: 0,
          },
          Drawer: {
            controlPaddingHorizontal: 1,
            padding: 8,
            paddingLG: 8,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
