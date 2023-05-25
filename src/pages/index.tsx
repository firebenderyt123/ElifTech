import Sidebar from "../containers/Sidebar";
import Grid from "@mui/material/Grid";

export default function HomePage() {
  return (
    <Grid container>
      <Grid item xs={12} sm={3} md={4}>
        <Sidebar />
      </Grid>
    </Grid>
  );
}
