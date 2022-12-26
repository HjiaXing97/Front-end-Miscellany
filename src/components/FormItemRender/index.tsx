/**
 * @Author: by Lenovo
 * @createdTime: 2022/12/26 15:18
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";
import { Form, Input, Select } from "antd";
import { IFormTypes } from "src/types/formTypes";

interface IProps {
  itemInfo: IFormTypes;
  children?: ReactNode;
}

const FormItemRender: FC<IProps> = (props) => {
  const { itemInfo } = props;
  const FormItem = {
    input: (itemInfo: IFormTypes) => {
      const { label, uuid } = itemInfo;
      return (
        <Form.Item label={label} name={uuid}>
          <Input />
        </Form.Item>
      );
    },
    select: (itemInfo: IFormTypes) => {
      const { label, uuid } = itemInfo;
      return (
        <Form.Item label={label} name={uuid}>
          <Select />
        </Form.Item>
      );
    }
  };
  const { key } = itemInfo;
  const render = FormItem[key];
  return <>{render(itemInfo)}</>;
};
export default memo(FormItemRender);
