/**
 * @Author: by Lenovo
 * @createdTime: 2022/12/26 10:16
 * @description:
 */

import type { FC, ReactNode } from "react";
import React, { memo } from "react";
import { config } from "./utils/config";
import { widgetsMap } from "./utils/widgetsMap";
import { OptionsItem, OptionsLabel } from "./styles";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { addFormActions, itemInfoActions } from "src/store/modules/lowCode";
import type { IFormTypes } from "src/types/formTypes";
import getComponentAttr from "./utils/getComponentAttr";
import { cloneDeep } from "lodash";

interface IProps {
  children?: ReactNode;
}

const FormOptions: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const { itemInfo, formList } = useAppSelector((state) => ({
    itemInfo: state.lowCodeSlice.itemInfo as IFormTypes,
    formList: state.lowCodeSlice.formList
  }));

  const optionsChange = (e, label, parentLevel?: string) => {
    const param = cloneDeep(itemInfo) as IFormTypes;

    if (parentLevel) {
      param[parentLevel][label] = e;
    } else {
      param[label] = e;
    }
    const uuid = param?.uuid;
    const index = formList.findIndex((node: IFormTypes) => node.uuid === uuid);
    const arr: IFormTypes[] = [...formList];
    if (index > -1) {
      arr.splice(index, 1, param);
    }
    dispatch(itemInfoActions(param));
    dispatch(addFormActions(arr));
  };
  return (
    <>
      {config.map((node, index) => {
        const { widgets, label, field, parentLevel } = node;
        const Com = widgetsMap.get(widgets) as React.ElementType;
        const value = getComponentAttr(itemInfo, field, parentLevel);
        return (
          <OptionsItem key={index.toString()}>
            <OptionsLabel>{label}</OptionsLabel>
            <Com
              onChange={(e) => optionsChange(e, field, parentLevel)}
              {...node}
              value={value}
            />
          </OptionsItem>
        );
      })}
    </>
  );
};
export default memo(FormOptions);
