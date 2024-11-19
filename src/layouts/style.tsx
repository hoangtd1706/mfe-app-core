import { NavLink } from "react-router-dom";
import styled from "styled-components";

const menuWidth = 250;

export const LayoutStl = {
  Wrap: styled.div<{ $openMenu: boolean }>`
    display: grid;
    grid-template-columns: ${({ $openMenu }) => ($openMenu ? menuWidth : 0)}px 1fr;
    width: 100%;
    height: 100%;
    background: #cfe1ca;
    overflow: hidden;
    transition: all 0.25s ease-in-out;
    @media (max-width: 1200px) {
      grid-template-columns: 0 1fr;
    }
  `,
  Menu: styled.div<{ $openMenu: boolean }>`
    position: absolute;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: ${menuWidth}px;
    height: 100%;
    top: 0;
    left: ${({ $openMenu }) => ($openMenu ? 0 : -menuWidth)}px;
    border-right: 1px solid #d8dfe9;
    background: #e9eeea;
    transition: all 0.25s ease-in-out;
    overflow: hidden;
    overflow-y: auto;
    z-index: 1000;
  `,
  AppInfo: styled.div`
    display: flex;
    gap: 16px;
    justify-content: center;
    width: 100%;
    height: 28px;
    border-top: 1px solid #d8dfe9;
  `,
  Content: styled.div<{ $openMenu: boolean }>`
    display: grid;
    grid-template-rows: 38px 1fr;
    width: 100%;
    height: 100%;
    background: #fdfdfd;
    overflow: hidden;
  `,
  MainContent: styled.div`
    display: block;
    width: 100%;
    height: 100%;
    padding: 8px;
    overflow: hidden;
  `,
};

export const MenuStl = {
  Wrap: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #0052a1;
    color: #fff;
  `,
  Content: styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
    padding: 8px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
  `,
  ModuleWrap: styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 3px;
    width: 100%;
    height: fit-content;
  `,
  ModuleName: styled.div`
    display: block;
    width: 100%;
    color: #fff;
    font-weight: 600;
  `,
  Item: styled(NavLink)`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: fit-content;
    padding: 8px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
    overflow: hidden;
    * {
      color: #fff;
    }
    &.active {
      &::before {
        content: "";
        background: #fff;
      }
    }

    &:hover {
      &::before {
        content: "";
        background: #fff;
        opacity: 0.1;
      }
    }

    &::before {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: transparent;
      opacity: 0.2;
    }
  `,
};

export const PageStl = {
  Wrap: styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
    width: 100%;
    height: 100%;
    padding: 8px;
    overflow: hidden;
  `,
  Title: styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  `,
  TitleAction: styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 3px;
  `,
  Content: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 6px;
    border-radius: 6px;
    overflow: hidden;
    overflow-y: auto;
  `,
};
