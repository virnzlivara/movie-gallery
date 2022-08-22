import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';  
interface IProps {
  imageUrl: string;
  original_title?: string;
  overview?: string;
}
const MultiActionAreaCard = (props: IProps) => { 
  return (
    <Card sx={{ maxWidth: 300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500" 
          image= {props.imageUrl}
          alt="green iguana"
        />
        <CardContent> 
          <Typography gutterBottom variant="h5" component="div">
            {props.original_title}
          </Typography> 
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default MultiActionAreaCard;
