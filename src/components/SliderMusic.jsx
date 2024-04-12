import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});
const style = {
  color: "#124076",
  marginTop: "6px",
  marginBottom: "6px",
};
function SliderMusic(props) {
  const duration = props?.max;
  const position = props?.value;

  function formatDuration(value) {
    const newValue = Math.trunc(value);
    const minute = Math.floor(newValue / 60);
    const secondLeft = newValue - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        style={style}
        aria-label="time-indicator"
        size="small"
        value={position}
        min={0}
        step={1}
        max={duration}
        onChange={props?.handleTimeChange}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: -2,
        }}>
        <TinyText>{formatDuration(position)}</TinyText>
        <TinyText>-{formatDuration(duration - position)}</TinyText>
      </Box>
    </Box>
  );
}

export default SliderMusic;
