import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todotitle } from "./store/selectors/todotitle";
import { tododescription } from "./store/selectors/tododescription";

export default function Todos(){
const title  = useRecoilValue(todotitle);
const Description =useRecoilValue(tododescription);

  return<>
  <div style={{display : "flex", padding: 20}}> 
  <Card sx={{ minWidth: 345 }}>
  <CardContent >
        <Typography textAlign={"center"} variant="h5" component="div">
         {title} 
        </Typography>  
        <Typography variant="body2" color="text.secondary">
        {Description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button variant="contained" size="smll">Complete</Button>
      </CardActions>
      </Card>
      </div>
      </>
     
}