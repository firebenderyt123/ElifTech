import React from "react";
import Box, { BoxProps } from "@mui/material/Box";

function EmptyCard({ children, ...rest }: BoxProps): JSX.Element {
  return (
    <Box
      borderRadius="10px"
      boxShadow="0px 0px 20px 0px #00000010"
      sx={{
        backgroundColor: "background.secondary",
        maxWidth: "15.625rem",
        position: "relative",
        "& img": {
          cursor: "pointer",
          overflow: "hidden",
          transition: "transform 0.2s ease-in-out",
        },
        "& img:hover": {
          transform: "scale(1.5) rotate(-15deg)",
        },
        sm: { maxWidth: "18.75rem" },
      }}
      {...rest}>
      {children}
    </Box>
  );
}

export default React.memo(EmptyCard);
