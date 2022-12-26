import { IFormTypes } from "src/types/formTypes";
import { Form, Input, Select } from "antd";
import React from "react";

export const FormItem = {
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
