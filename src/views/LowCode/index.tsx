/**
 * @Author: Create by wuyuwuqiu.  on 12月
 * @createdTime: 2022-12-25 14:40
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";
import ComList from "./component/comList";
import Render from "./component/Render";
import FormOptions from "./component/FormOptions";
import { LowCodeWarp } from "./styles";

interface IProps {
  children?: ReactNode;
}

const LowCode: FC<IProps> = () => {
  return (
    <LowCodeWarp>
      <div className={"ComList"}>
        <ComList />
      </div>
      <div className={"Render"}>
        <Render />
      </div>
      <div className={"FormOptions"}>
        <FormOptions />
      </div>
    </LowCodeWarp>
  );
};
export default memo(LowCode);
