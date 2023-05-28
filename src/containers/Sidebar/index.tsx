import StyledBox from "../../components/StyledBox";
import React from "react";
import { BoxProps } from "@mui/material/Box";

export default function Sidebar({ children, ...rest }: BoxProps): JSX.Element {
  return (
    <StyledBox position="sticky" top="88px" {...rest}>
      {children}
    </StyledBox>
  );
}
