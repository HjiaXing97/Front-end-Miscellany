import type { IConfigItem } from "src/types/formTypes";

export const config: IConfigItem[] = [
  {
    label: "uuid",
    widgets: "BaseInput",
    disabled: true,
    field: "uuid"
  },
  {
    label: "标题",
    widgets: "BaseInput",
    field: "label"
  },
  {
    label: "提示语",
    widgets: "BaseInput",
    field: "placeholder",
    parentLevel: "attribute"
  },
  {
    label: "是否必填",
    widgets: "BaseSwitch",
    field: "required",
    parentLevel: "attribute"
  }
];
