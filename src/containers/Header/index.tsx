import StyledBox from "../../components/StyledBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function HeaderBlock() {
  return (
    <StyledBox
      borderRadius={0}
      position="sticky"
      top={0}
      boxShadow="0px -15px 20px 0px"
      zIndex={10000000}
      mb={4}>
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item>Shop</Grid>
          <Grid item>Cart</Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
}
