/**
 * @Author: by Lenovo
 * @createdTime: 2022/12/26 10:15
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";
import ElementList from "../../data/ElementList";
import { ComItem, ComWarp } from "./styles";

interface IProps {
  children?: ReactNode;
}

const ComList: FC<IProps> = () => {
  /**
   * @param e  拖动目标元素
   * @param node   元素属性
   */
  const onDragStart = (e: React.DragEvent<HTMLParagraphElement>, node) => {
    e.dataTransfer.setData("key", node.key);
    e.dataTransfer.setData("label", node.label);
  };
  return (
    <ComWarp>
      {ElementList.map((node) => {
        return (
          <ComItem
            key={node.key}
            draggable={true}
            onDragStart={(e) => onDragStart(e, node)}
          >
            {node.label}
          </ComItem>
        );
      })}
    </ComWarp>
  );
};
export default memo(ComList);
