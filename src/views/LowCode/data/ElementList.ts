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
  }
];

export default ElementList;
