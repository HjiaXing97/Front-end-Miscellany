/**
 * @Author: Create by wuyuwuqiu.  on 12月
 * @createdTime: 2022-12-25 14:39
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";
import { Button } from "antd";

interface IProps {
  children?: ReactNode;
}

const DataSource: FC<IProps> = () => {
  const openFormOptions = () => {
    window.open("#/low-code");
  };
  return (
    <>
      <p>DataSource</p>
      <Button type={"link"} onClick={openFormOptions}>
        表单配置
      </Button>
    </>
  );
};
export default memo(DataSource);
