import  React , {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Data from "./Data.json" 
import LinearProgress from '@mui/material/LinearProgress';

export default function MediaCard(props) {
    useEffect(() => {
        console.log(props);
    }, []);
  return (
    <Card  sx={{ maxWidth: 345  , backgroundColor:`${props.state.fill}` , borderRadius:"25px"}}>
      
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {props.state.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <h3>O`quvchilar soni:{props.state.count}</h3>
         <h4>Darajasi:{props.state.daraja}</h4>
         <p>{props.state.value}%</p>
        <LinearProgress variant='buffer'  value={props.state.value} valueBuffer={props.state.value}/>

        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
