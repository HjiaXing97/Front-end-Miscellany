import type { FC, ReactNode } from "react";
import React from "react";
import { Input } from "antd";

interface IProps {
  onChange?: () => void;
  children?: ReactNode;
}

export const baseInput: FC<IProps> = (props) => {
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
