import type { FC, ReactNode } from "react";
import React from "react";
import { Input, Switch } from "antd";

interface IProps {
  onChange?: () => void;
  value?: any;
  children?: ReactNode;
}

export const BaseInput: FC<IProps> = (props) => {
  const { onChange } = props;

  const info =
    typeof onChange === "function"
      ? {
          ...props,
          // @ts-ignore
          onChange: (e) => onChange(e.target.value)
        }
      : props;
  return <Input {...info}></Input>;
};

export const BaseSwitch: FC<IProps> = (props) => {
  const { value, onChange } = props;

  const info =
    typeof onChange === "function"
      ? {
          ...props,
          // @ts-ignore
          onChange: (e) => onChange(e)
        }
      : props;
  return <Switch {...info} checked={value}></Switch>;
};
