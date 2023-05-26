import React from "react";
import Box, { BoxProps } from "@mui/material/Box";

function StyledBox({ children, ...rest }: BoxProps): JSX.Element {
  return (
    <Box
      borderRadius="10px"
      p={2}
      sx={{ backgroundColor: "background.secondary" }}
      {...rest}>
      {children}
    </Box>
  );
}

export default React.memo(StyledBox);
