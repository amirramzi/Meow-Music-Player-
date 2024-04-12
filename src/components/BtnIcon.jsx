import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
export default function BtnIcon(props) {
  return (
    <Tooltip title={props.title}>
      <IconButton
        style={props.style}
        className={props.className}
        onClick={props.onClick}
        color={props.color}
        size={props.size}>
        {props.icon}
      </IconButton>
    </Tooltip>
  );
}
