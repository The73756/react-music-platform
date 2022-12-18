import { useState } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Routes } from '../types/routes';

const menuItems = [
  { text: 'Главная', href: Routes.HOME },
  { text: 'Список треков', href: Routes.TRACKS },
  { text: 'Список альбомов', href: Routes.ALBUMS },
];

export default function Navbar() {
  const [state, setState] = useState(false);
  const router = useRouter();

  const toggleDrawer = (newState) => () => {
    setState(newState);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} mb="20px">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React music platform
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 350 }} role="presentation">
          <div>
            <IconButton onClick={toggleDrawer(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List>
            {menuItems.map(({ text, href }, index) => (
              <ListItem key={href} disablePadding>
                <ListItemButton onClick={() => router.push(href)}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
