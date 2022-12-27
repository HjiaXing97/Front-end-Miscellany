/**
 * @Author: by Lenovo
 * @createdTime: 2022/12/26 10:15
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";
import ElementList from "../../data/ElementList";
import { CompontName, ComWarp, Iconfont, Item } from "./styles";
import { iconMap } from "./utils/iconMap";

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
        const icon = iconMap.get(node.key);

        return (
          <Item
            key={node.key}
            draggable={true}
            onDragStart={(e) => onDragStart(e, node)}
          >
            <Iconfont
              className='iconfont'
              dangerouslySetInnerHTML={{ __html: icon as string }}
            ></Iconfont>
            <CompontName>{node.label}</CompontName>
          </Item>
        );
      })}
    </ComWarp>
  );
};
export default memo(ComList);
