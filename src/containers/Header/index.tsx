import StyledBox from "../../components/StyledBox";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function HeaderBlock(): JSX.Element {
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
            <Button href="/cart">
              <ShoppingCartOutlinedIcon />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
}
