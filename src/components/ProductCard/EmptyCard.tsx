import React from "react";
import Box, { BoxProps } from "@mui/material/Box";

function EmptyCard({ children, ...rest }: BoxProps): JSX.Element {
  return (
    <Box
      borderRadius="10px"
      boxShadow="0px 0px 20px 0px #00000010"
      sx={{
        backgroundColor: "background.secondary",
        position: "relative",
        width: { xs: "100%", md: "15.625rem" },
        "& img": {
          cursor: "pointer",
          overflow: "hidden",
          objectFit: "cover",
          width: "100%",
          transition: "transform 0.2s ease-in-out",
        },
        "& img:hover": {
          transform: "scale(1.5) rotate(-15deg)",
        },
      }}
      {...rest}>
      {children}
    </Box>
  );
}

export default React.memo(EmptyCard);
