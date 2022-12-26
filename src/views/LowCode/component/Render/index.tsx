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
import { IItemTypes } from "src/views/LowCode/component/Render/types";
import createUUID from "src/utils/createUUID";

interface IProps {
  children?: ReactNode;
}

const Render: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  const { formList } = useAppSelector((state) => ({
    formList: state.lowCodeSlice.formList as IItemTypes[]
  }));
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  //完成拖拽获取拖拽数据
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const key = e.dataTransfer.getData("key");
    const label = e.dataTransfer.getData("label");

    const arr = [...formList];

    arr.push({
      key,
      label,
      uuid: `${key}-${createUUID()}`
    });

    dispatch(addFormActions(arr));
  };
  return (
    <RenderWarp onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e)}>
      {formList.map((node) => {
        return <div key={node.uuid}>{node.label}</div>;
      })}
    </RenderWarp>
  );
};
export default memo(Render);
