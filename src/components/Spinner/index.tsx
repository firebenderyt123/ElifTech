import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

type SpinnerProps = {
  disableShrink?: boolean;
  size?: number | string;
  [key: string]: any;
};

function Spinner({
  disableShrink = true,
  size = "6.25rem",
  ...rest
}: SpinnerProps): JSX.Element {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center">
      <CircularProgress disableShrink={disableShrink} size={size} {...rest} />
    </Box>
  );
}

export default React.memo(Spinner);
