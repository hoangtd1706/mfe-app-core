import * as React from "react";
import ForbidImg from "./../assets/forbid.svg";
import styled from "styled-components";
import Typography from "antd/es/typography";

export default function Forbidden(): JSX.Element {
  return (
    <Stl.Wrap>
      <Stl.WrapText>
        <Typography.Title>OOPS!</Typography.Title>
        <Typography.Text>
          Xin lỗi, nhưng bạn chưa có quyền truy cập vào chức năng này
        </Typography.Text>
      </Stl.WrapText>
      <Stl.WrapImg>
        <Stl.Img src={ForbidImg} alt="Forbidden" />
      </Stl.WrapImg>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100%;
    padding: 60px;
    overflow: hidden;
  `,
  WrapText: styled.div`
    text-align: center;
  `,
  WrapImg: styled.div``,
  Img: styled.img`
    max-height: 500px;
  `,
};
