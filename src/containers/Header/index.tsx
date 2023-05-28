import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StyledBox from "../../components/StyledBox";
import { useCart } from "../../hooks/useCart";

export default function HeaderBlock(): JSX.Element {
  const { totalQuantity } = useCart();
  return (
    <StyledBox
      borderRadius={0}
      position="sticky"
      top={0}
      zIndex={10000000}
      mb={4}>
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Button href="/">Shop</Button>
          </Grid>
          <Grid item>
            <IconButton
              href="/cart"
              aria-label="show 4 new mails"
              color="inherit">
              <Badge badgeContent={totalQuantity} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
}
