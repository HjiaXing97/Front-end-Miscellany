interface IElement {
  key: string;
  label: string;
  id: string;
}

const ElementList: IElement[] = [
  {
    key: "input",
    id: "input",
    label: "输入框"
  },
  {
    key: "select",
    label: "选择框",
    id: "select"
  },
  {
    key: "inputNumber",
    label: "数字输入框",
    id: "inputNumber"
  },
  {
    key: "datePicker",
    label: "日期选择",
    id: "datePicker"
  },
  {
    key: "textArea",
    label: "多行文本",
    id: "textArea"
  },
  {
    key: "radio",
    label: "单选",
    id: "radio"
  },
  {
    key: "switch",
    label: "开关",
    id: "switch"
  }
];

export default ElementList;
