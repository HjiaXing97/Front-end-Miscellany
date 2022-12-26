import React from "react";

interface IMenuData {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: IMenuData[];
}

const data: IMenuData[] = [
  {
    key: "/data-source",
    label: "数据源配置"
  },
  {
    key: "/low-code",
    label: "表单设计"
  },
  {
    key: "/flow-design",
    label: "流程设计"
  },
  {
    key: "/personal-center",
    label: "个人中心"
  }
];

export default data;
