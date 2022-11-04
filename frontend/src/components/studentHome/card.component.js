import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../assets/images/images_studHome/poster1.jpeg'

export default function MediaCard() {
  return (
    <>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image="/poster1.jpeg"
            alt="coderit"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            CodeRIT
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <AccountCircleIcon />
            <Typography style={{"padding-left":"0.5em"}}>
                John Doe
            </Typography>
        </CardActions>
        </Card>
        
    </>
  );
}
