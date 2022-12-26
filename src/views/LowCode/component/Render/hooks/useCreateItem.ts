import createUUID from "src/utils/createUUID";
import { IItemTypes } from "../types";

export default function (key, label): IItemTypes {
  return {
    key,
    label,
    uuid: `${key}-${createUUID()}`
  };
}
