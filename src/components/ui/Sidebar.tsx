import { useContext } from 'react'
import { Drawer, Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { UIContext } from '../../context/ui/UIContext';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {

  const { sidemenuOpen, closeSideMenu } = useContext(UIContext)

  return (
    <Drawer
      anchor="left"
      open={sidemenuOpen}
      onClose={closeSideMenu}
    >
      <Box>
        <Typography variant="h4">Menú</Typography>
      </Box>
      <List>
        {
          menuItems.map((text, index) => (
            <ListItem button key={text}>
              {index % 2 ? <InboxIcon /> : <MailOutlineIcon />}
              <ListItemText primary={text} />
            </ListItem>
          ))
        }
      </List>
    </Drawer >
  )
}
