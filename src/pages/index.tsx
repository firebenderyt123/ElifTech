import ProductListBlock from "../containers/ProductList";
import Sidebar from "../containers/Sidebar";
import Grid from "@mui/material/Grid";

export default function HomePage(): JSX.Element {
  return (
    <Grid container>
      <Grid item xs={12} sm={3} order={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} sm={9} order={1} sx={{ xs: { margin: "1rem 0" } }}>
        <ProductListBlock />
      </Grid>
    </Grid>
  );
}
