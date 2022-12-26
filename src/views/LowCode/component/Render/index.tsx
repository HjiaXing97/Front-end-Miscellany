/**
 * @Author: by Lenovo
 * @createdTime: 2022/12/26 10:15
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";
import { RenderWarp } from "./styles";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { addFormActions } from "src/store/modules/lowCode";
import { IFormTypes } from "src/types/formTypes";

import useCreateItem from "./hooks/useCreateItem";
import DynamicForm from "src/components/DynamicForm";

interface IProps {
  children?: ReactNode;
}

const Render: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  const { formList } = useAppSelector((state) => ({
    formList: state.lowCodeSlice.formList as IFormTypes[]
  }));

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  //完成拖拽获取拖拽数据
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const key = e.dataTransfer.getData("key");
    const label = e.dataTransfer.getData("label");

    const arr = [...formList];
    arr.push(useCreateItem(key, label));
    dispatch(addFormActions(arr));
  };
  return (
    <RenderWarp onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e)}>
      <DynamicForm formList={formList} />
    </RenderWarp>
  );
};
export default memo(Render);
