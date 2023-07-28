import { Entry } from '@/interfaces';
import { Card, CardActionArea, Typography, CardContent, CardActions } from '@mui/material';

interface Props {
  entry: Entry;
}

export const EntryCard = ({ entry }: Props) => {
  return (
    <Card
      sx={{ marginBottom: 1 }}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant="body2">Hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
