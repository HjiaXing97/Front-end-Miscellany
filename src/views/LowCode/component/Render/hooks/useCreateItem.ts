import { IFormTypes } from "src/types/formTypes";
import UseCreateCom from "src/hooks/useCreateCom";

export default function (comKey: string, comLabel: string): IFormTypes {
  const { key, label, uuid, attribute } = new UseCreateCom(comKey, comLabel);

  return {
    key,
    label,
    uuid,
    attribute
  };
}
