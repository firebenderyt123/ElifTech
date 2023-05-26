import StyledBox from "../../components/StyledBox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const shops: string[] = ["Shop 1", "Shop 2", "Shop 3"];

export default function Sidebar(): JSX.Element {
  return (
    <StyledBox>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        rowSpacing={2}
        order={2}>
        <Grid item>
          <Typography component="h3">Shops:</Typography>
        </Grid>
        <Grid
          container
          item
          flexDirection="column"
          alignItems="center"
          rowSpacing={1}>
          {shops.map((shop) => (
            <Grid item key={shop}>
              <Button variant="outlined">{shop}</Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </StyledBox>
  );
}
