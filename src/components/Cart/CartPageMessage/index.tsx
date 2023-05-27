import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StyledBox from "../../StyledBox";

type CartPageMessageProps = {
  message: string;
};

function CartPageMessage({ message }: CartPageMessageProps): JSX.Element {
  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center">
      <StyledBox>
        <Typography variant="h2" textAlign="center">
          {message}
        </Typography>
        <Box width="100%" display="flex" justifyContent="center" mt="2rem">
          <Button href="/" variant="contained">
            To Home
          </Button>
        </Box>
      </StyledBox>
    </Box>
  );
}

export default CartPageMessage;
