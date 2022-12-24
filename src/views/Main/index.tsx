/**
 * @Author: Create by wuyuwuqiu.  on 12月
 * @createdTime: 2022-12-24 13:42
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { changeNameActions } from "src/store/modules/main";

interface IProps {
  children?: ReactNode;
}

const Main: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => ({
    name: state.mainSlice.name
  }));

  const handleChangeName = () => {
    dispatch(changeNameActions("cp"));
  };
  return (
    <>
      Main
      {name}
      <button onClick={handleChangeName}>button</button>
    </>
  );
};
export default memo(Main);
