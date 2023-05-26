import React from "react";
import Box, { BoxProps } from "@mui/material/Box";

function StyledBox({ children, ...rest }: BoxProps): JSX.Element {
  return (
    <Box
      borderRadius="10px"
      boxShadow="0px 0px 20px 0px #00000010"
      p={2}
      sx={{ backgroundColor: "background.secondary" }}
      {...rest}>
      {children}
    </Box>
  );
}

export default React.memo(StyledBox);
