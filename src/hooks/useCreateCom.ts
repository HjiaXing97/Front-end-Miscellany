import CreateUUID from "src/utils/createUUID";
import type { IAttribute } from "src/types/formTypes";

class UseCreateCom {
  key: string;
  label: string;
  uuid: string;
  attribute: IAttribute;

  constructor(key, label) {
    this.key = key;
    this.label = label;
    this.uuid = CreateUUID();
    this.attribute = {
      placeholder: `请输入${label}`,
      required: false
    };
  }
}

export default UseCreateCom;
