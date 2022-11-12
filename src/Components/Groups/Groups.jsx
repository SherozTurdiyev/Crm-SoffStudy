import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Data from "./Data.json";
import LinearProgress from "@mui/material/LinearProgress";

export default function MediaCard(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <>
      {props.state.name === "Backend" ? (
        <>
          <Card
            sx={{
              maxWidth: 345,
              backgroundColor: `#DBF6FD`,
              borderRadius: "25px",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.state.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h3>O`quvchilar soni:{props.state.students.length}</h3>
                <h4>Darajasi:80%</h4>
                <LinearProgress variant='buffer' style={{height:"8px" , borderRadius:"20px"}}  value="80" valueBuffer="80"/>
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </>
      ) : (
        <>
          <Card
            sx={{
              maxWidth: 345,
              backgroundColor: `#FEE4CB`,
              borderRadius: "25px",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.state.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <h3>O`quvchilar soni:{props.state.students.length}</h3>
                <h4>Darajasi:80%</h4>
                <p>80%</p>
                {/* <LinearProgress variant='buffer' style={{height:"8px" , borderRadius:"20px"}}  value={80} valueBuffer={80}/> */}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </>
      )}
    </>
  );
}
