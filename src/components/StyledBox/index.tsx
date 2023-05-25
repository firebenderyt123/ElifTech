import Box, { BoxProps } from "@mui/material/Box";

export default function StyledBox({ children, ...rest }: BoxProps) {
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
