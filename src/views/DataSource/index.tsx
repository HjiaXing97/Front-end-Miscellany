/**
 * @Author: Create by wuyuwuqiu.  on 12月
 * @createdTime: 2022-12-25 14:39
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";

interface IProps {
  children?: ReactNode;
}

const DataSource: FC<IProps> = () => {
  return <>DataSource</>;
};
export default memo(DataSource);
