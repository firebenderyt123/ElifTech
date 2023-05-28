import Filters from "../containers/Filters";
import ProductListBlock from "../containers/ProductList";
import Sidebar from "../containers/Sidebar";
import Grid from "@mui/material/Grid";

export default function HomePage(): JSX.Element {
  return (
    <Grid container>
      <Grid item xs={12} sm={3} mb="1rem">
        <Sidebar>
          <Filters />
        </Sidebar>
      </Grid>
      <Grid item xs={12} sm={9} mb="1rem">
        <ProductListBlock />
      </Grid>
    </Grid>
  );
}
