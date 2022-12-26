/**
 * @Author: by Lenovo
 * @createdTime: 2022/12/26 15:18
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";
import { IFormTypes } from "src/types/formTypes";
import { FormItem } from "./FormItem";

interface IProps {
  itemInfo: IFormTypes;
  children?: ReactNode;
}

const FormItemRender: FC<IProps> = (props) => {
  const { itemInfo } = props;

  const { key } = itemInfo;
  const render = FormItem[key];

  return <>{render(itemInfo)}</>;
};
export default memo(FormItemRender);
