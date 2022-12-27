import type { IFormTypes } from "src/types/formTypes";

export default function getComponentAttr(
  info: IFormTypes,
  field: string,
  parentLevel?: string
) {
  let value;
  if (parentLevel) {
    value = info?.[parentLevel]?.[field];
  } else {
    value = info?.[field];
  }

  return value;
}
