import Sidebar from "../containers/Sidebar";
import Grid from "@mui/material/Grid";

export default function HomePage() {
  return (
    <Grid container>
      <Grid item xs={2} md={4}>
        <Sidebar />
      </Grid>
    </Grid>
  );
}
