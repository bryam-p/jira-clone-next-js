import { Layout } from "@/components/layouts";
import { EntryList } from "@/components/ui";
import { Card, CardHeader, CardContent, Grid } from "@mui/material";
import { NewEntry } from '../components/ui/NewEntry';

export default function Home() {
  return (
    <Layout title="Home - OpenJira">

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="pendientes" />
            <NewEntry />
            <EntryList status="pending" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="pendientes" />
            <EntryList status="in-progress" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="pendientes" />
            <EntryList status="finished" />
          </Card>
        </Grid>
      </Grid>

    </Layout>
  )
}
