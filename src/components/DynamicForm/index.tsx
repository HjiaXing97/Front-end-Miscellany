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
import { FormItemWarp } from "./styles";
import { useAppDispatch } from "src/store/hooks";
import { itemInfoActions } from "src/store/modules/lowCode";

interface IProps {
  formList?: IFormTypes[];
  children?: ReactNode;
}

const DynamicForm: FC<IProps> = (props) => {
  const { formList } = props;
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const onFinish = (values) => {
    console.log(values);
  };

  const handleItemClick = (e, item: IFormTypes) => {
    e.preventDefault();
    dispatch(itemInfoActions(item));
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
          return (
            <FormItemWarp
              key={node.uuid}
              onClick={(event) => handleItemClick(event, node)}
            >
              <FormItemRender itemInfo={node} />
            </FormItemWarp>
          );
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
