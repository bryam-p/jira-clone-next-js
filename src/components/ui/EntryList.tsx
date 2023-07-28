import { useContext, useMemo } from 'react';
import { Paper, List } from '@mui/material';
import { EntryCard } from './EntryCard';
import { EntryStatus } from '@/interfaces';
import { EntriesContext } from '@/context/entries';

interface Props {
  status: EntryStatus;
}

export const EntryList = ({ status }: Props) => {
  const { entries } = useContext(EntriesContext)
  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

  return (
    <div>
      <Paper sx={{ height: 'calc(100vh - 250px)', backgroundColor: 'transparent', padding: '1px 5px' }}>
        <List sx={{ opacity: 1 }}>
          {
            entriesByStatus.map(entry => (
              <EntryCard key={entry._id} entry={entry} />
            ))
          }
        </List>
      </Paper>
    </div>
  )
}
