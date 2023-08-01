import { useEffect, useState } from "react";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import { tododescription } from "./store/selectors/tododescription";
import { todotitle } from "./store/selectors/todotitle";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Card,Typography,Button} from '@mui/material';


function Landing(){
  const [title,settitle] = useRecoilState(todotitle);
  const [description,setdescription] = useRecoilState(tododescription);
return(<>
    <div style={{"display":"flex"
,justifyContent:"center", paddingTop:150}}>
    <Typography variant={"h6"}>
                Welcome to Todos
    </Typography>
     </div>
     <div style={{display: "flex", justifyContent: "center"}}>
    <Card  style={{width: 400, padding: 20}}>
        <TextField
        onChange={(e)=>{
          settitle(e.target.value);
        }}
          fullWidth={true}
          label="Title"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
        onChange={(e) =>{
          setdescription(e.target.value);
        }}
         fullWidth={true}
          label="Description"
          variant="outlined"
       />
       <br />
       <br />
       <Button variant="contained" size="large" >Submit</Button>
       </Card>
       </div>
        </>
        
)
}
export default Landing;