import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Outlet } from 'react-router-dom';
import '../../routes/studentHome/studHome.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
  
  export default function ListDividers() {
    return (
        <>
        <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
            <AccountCircleIcon />
            <ListItemText primary="Person 1" style={{"padding-left":"0.5em"}} />
            </ListItem>
            <Divider />
            <ListItem button divider>
            <AccountCircleIcon />
            <ListItemText primary="Person 2" style={{"padding-left":"0.5em"}}/>
            </ListItem>
            <ListItem button>
            <AccountCircleIcon />
            <ListItemText primary="Person 3" style={{"padding-left":"0.5em"}}/>
            </ListItem>
            <Divider />
            <ListItem button>
            <AccountCircleIcon />
            <ListItemText primary="Person 4" style={{"padding-left":"0.5em"}}/>
            </ListItem>
            <Divider />
            <ListItem button>
            <AccountCircleIcon />
            <ListItemText primary="Person 4" style={{"padding-left":"0.5em"}}/>
            </ListItem>
            <Divider />
            <ListItem button>
            <AccountCircleIcon />
            <ListItemText primary="Person 4" style={{"padding-left":"0.5em"}}/>
            </ListItem>
        </List>
        <Outlet />
        </>
      
    );
}