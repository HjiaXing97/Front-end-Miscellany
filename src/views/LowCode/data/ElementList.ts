interface IElement {
  key: string;
  label: string;
}

const ElementList: IElement[] = [
  {
    key: "input",
    label: "输入框"
  },
  {
    key: "select",
    label: "选择框"
  },
  {
    key: "inputNumber",
    label: "数字输入框"
  },
  {
    key: "datePicker",
    label: "日期选择"
  },
  {
    key: "textArea",
    label: "多行文本"
  },
  {
    key: "radio",
    label: "单选"
  },
  {
    key: "switch",
    label: "开关"
  }
];

export default ElementList;
