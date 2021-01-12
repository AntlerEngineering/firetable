import React, { lazy } from "react";
import { IFieldConfig, FieldType } from "components/fields/types";
import withPopoverCell from "components/Table/withPopoverCell";

import SingleSelectIcon from "@material-ui/icons/FormatListBulleted";
import PopoverBasicCell from "./PopoverBasicCell";
import NullEditor from "components/Table/editors/NullEditor";

const PopoverCell = lazy(
  () =>
    import("./PopoverCell" /* webpackChunkName: "PopoverCell-SingleSelect" */)
);
const SideDrawerField = lazy(
  () =>
    import(
      "./SideDrawerField" /* webpackChunkName: "SideDrawerField-SingleSelect" */
    )
);

export const config: IFieldConfig = {
  type: FieldType.singleSelect,
  name: "Single Select",
  dataType: "string | null",
  initialValue: null,
  icon: <SingleSelectIcon />,
  description:
    "Dropdown selector with searchable options and radio button behavior. Optionally allows users to input custom values. Max selection: 1 option.",
  TableCell: withPopoverCell(PopoverCell, PopoverBasicCell, {
    anchorOrigin: { horizontal: "left", vertical: "bottom" },
    transparent: true,
  }),
  TableEditor: NullEditor,
  SideDrawerField,
};
export default config;
