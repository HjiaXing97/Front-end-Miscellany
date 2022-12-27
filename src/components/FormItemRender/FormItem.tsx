import { IFormTypes } from "src/types/formTypes";
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch
} from "antd";
import React from "react";

export const FormItem = {
  input: (itemInfo: IFormTypes) => {
    const { label, uuid, attribute } = itemInfo;

    const { placeholder, required } = attribute;
    return (
      <Form.Item label={label} name={uuid} rules={[{ required }]}>
        <Input placeholder={placeholder} />
      </Form.Item>
    );
  },
  select: (itemInfo: IFormTypes) => {
    const { label, uuid, attribute } = itemInfo;
    const { placeholder, required } = attribute;

    return (
      <Form.Item label={label} name={uuid} rules={[{ required }]}>
        <Select placeholder={placeholder} />
      </Form.Item>
    );
  },
  inputNumber: (itemInfo: IFormTypes) => {
    const { label, uuid, attribute } = itemInfo;
    const { placeholder, required } = attribute;

    return (
      <Form.Item label={label} name={uuid} rules={[{ required }]}>
        <InputNumber placeholder={placeholder} />
      </Form.Item>
    );
  },
  textArea: (itemInfo: IFormTypes) => {
    const { label, uuid, attribute } = itemInfo;
    const { placeholder, required } = attribute;

    return (
      <Form.Item label={label} name={uuid} rules={[{ required }]}>
        <Input.TextArea placeholder={placeholder} />
      </Form.Item>
    );
  },
  datePicker: (itemInfo: IFormTypes) => {
    const { label, uuid, attribute } = itemInfo;
    const { placeholder, required } = attribute;

    return (
      <Form.Item label={label} name={uuid} rules={[{ required }]}>
        <DatePicker placeholder={placeholder} />
      </Form.Item>
    );
  },
  radio: (itemInfo: IFormTypes) => {
    const { label, uuid, attribute } = itemInfo;
    const { required } = attribute;

    return (
      <Form.Item label={label} name={uuid} rules={[{ required }]}>
        <Radio />
      </Form.Item>
    );
  },
  switch: (itemInfo: IFormTypes) => {
    const { label, uuid, attribute } = itemInfo;
    const { required } = attribute;

    return (
      <Form.Item label={label} name={uuid} rules={[{ required }]}>
        <Switch />
      </Form.Item>
    );
  }
};
