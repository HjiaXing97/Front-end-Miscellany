export interface IFormTypes {
  label: string;
  key: string;
  uuid: string;
  attribute: IAttribute;
}

export interface IConfigItem {
  label: string;
  widgets: "BaseInput" | "BaseSwitch";
  disabled?: boolean;
  field: string;
  parentLevel?: string;
}

export interface IAttribute {
  placeholder: string;
  required?: boolean;
}
