/**
 * @Author: by Lenovo
 * @createdTime: 2022/12/26 15:17
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";
import FormItemRender from "src/components/FormItemRender";
import { IFormTypes } from "src/types/formTypes";
import { Button, Form } from "antd";

interface IProps {
  formList?: IFormTypes[];
  children?: ReactNode;
}

const DynamicForm: FC<IProps> = (props) => {
  const { formList } = props;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Form
        onFinish={onFinish}
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        {formList?.map((node) => {
          return <FormItemRender key={node.uuid} itemInfo={node} />;
        })}
        <Form.Item>
          <Button type={"primary"} htmlType='submit'>
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default memo(DynamicForm);
