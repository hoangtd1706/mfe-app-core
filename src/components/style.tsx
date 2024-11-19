import { styled } from "styled-components";

export const AppBarStl = {
  Wrap: styled.div<{ $openMenu: boolean }>`
    display: flex;
    flex-flow: row nowrap;
    gap: 8px;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 8px;
    background: #fff;
    border-bottom: 1px solid #d8dfe9;
    transition: all 0.25s ease-in-out;
    @media (max-width: 1200px) {
      margin-left: ${({ $openMenu }) => ($openMenu ? 250 : 0)}px;
    }
  `,

  ScreenTitle: styled.div`
    display: flex;
    flex-flow: row nowrap;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
  `,
};
