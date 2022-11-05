import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import './studHome.css'
import { Outlet } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';
import VerticalNav from '../../components/navbar/verticalNavbar.component';
import ListDividers from '../../components/studentHome/connect.component';
import MediaCard from '../../components/studentHome/card.component';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <>
    <div className='student_home'>
        <div className='navbar_left'>
            <VerticalNav />
        </div>
        <div className='cards_container'>
            <MediaCard />
            <MediaCard />
            <MediaCard />
        </div>
        <div className='connect_right'>
            <p>Connect</p>
            <ListDividers></ListDividers>
        </div>
    </div>
    
    <Outlet />
    </>
  );
}
