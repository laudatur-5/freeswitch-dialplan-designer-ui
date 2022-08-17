import {
  Accordion,
  AccordionDetails,
  Box,
  Grid,
  TextField,
  Typography,
  AccordionSummary,
} from "@mui/material";
import React, { memo, useEffect } from "react";

import { Handle } from "react-flow-renderer";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const handleWrapperStyle = {
  display: "flex",
  position: "absolute",
  height: "100%",
  right: 0,
  top: 0,
  flexDirection: "column",
  justifyContent: "space-between",
};

const handleStyle = {
  position: "relative",
  transform: "none",
  top: "auto",
  color: "red",
};

export default memo(({ data, isConnectable }) => {
  useEffect(() => {}, [data]);

  return (
    <React.Fragment>
      <Handle
        type="source"
        position="right"
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <p>START</p>
    </React.Fragment>
  );
});