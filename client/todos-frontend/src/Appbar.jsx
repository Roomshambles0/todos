import { useState,Fragment} from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Sidebar/>
          <Typography variant="h6" color="inherit" component="div">
           TODOS
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function Sidebar() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    open: false
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ open: open });
    
  };

  const list = (state) => (
    <div style={{width:250}}>
      <List>
        {["Create","GetTodos"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={(text) =>{
              if(text == "Create"){
                navigate('/');
              }
            }}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      </div>
  );

 
  return (
    <div><Fragment>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
            <MenuIcon></MenuIcon>
        </IconButton>
          <Drawer
            anchor='left'
            open={state.open}
            onClose={toggleDrawer(false)}
          >
             {list(state)}
          </Drawer>
          </Fragment>
    </div>
  );
}
