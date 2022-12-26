/**
 * @Author: Create by wuyuwuqiu.  on 12月
 * @createdTime: 2022-12-25 14:19
 * @description:  左侧导航栏
 */

import type { FC, ReactNode } from "react";
import React, { memo, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { Logo, MenuWrap } from "./styles";
import { Menu } from "antd";
import data from "src/assets/data/menuData";

interface IProps {
  children?: ReactNode;
}

const AppMenu: FC<IProps> = () => {
  const [selectedKeys, useSelectedKeys] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    useSelectedKeys([pathname]);
  }, [pathname]);
  const handleItemClick = ({ key }) => {
    navigate(key);
  };
  return (
    <MenuWrap>
      <Logo>logo</Logo>
      <Menu
        items={data}
        mode={"vertical"}
        theme={"light"}
        selectedKeys={selectedKeys}
        onClick={handleItemClick}
      ></Menu>
    </MenuWrap>
  );
};
export default memo(AppMenu);
