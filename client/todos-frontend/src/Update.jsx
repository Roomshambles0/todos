import { useEffect, useState } from "react";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import { tododescription } from "./store/selectors/tododescription";
import { todotitle } from "./store/selectors/todotitle";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Card,Typography,Button} from '@mui/material';
import axios from "axios";
import { todoState } from "./store/atoms/todo";  
import { useParams } from "react-router-dom";
function Update(){
    const { id } = useParams();
  const [todos,settodos] = useRecoilState(todoState);
 const [title,setTitle] = useState(todos.title);
 const [description,setDescription] = useState(todos.description);
return(<>
    <div style={{"display":"flex"
,justifyContent:"center", paddingTop:150}}>
    <Typography variant={"h6"}>
                Update Todos
    </Typography>
     </div>
     <div style={{display: "flex", justifyContent: "center"}}>
    <Card  style={{width: 400, padding: 20}}>
        <TextField
        value={title}
        onChange={(e)=>{
          setTitle( e.target.value);
          console.log(title);
        }}
          fullWidth={true}
          label="Title"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
        value={description}
        onChange={(e) =>{
          setDescription(e.target.value);
          console.log(description);
        }}
         fullWidth={true}
          label="Description"
          variant="outlined"
       />
       <br />
       <br />
       <Button variant="contained" size="large" onClick={()=>{
        axios.put('http://localhost:3000/todos/' + id,{
        title : title,
        description: description
        },{
          headers:{
            "Content-type": "application/json"
          }
        })
       }}>Update</Button>
       </Card>
       </div>
        </>
        
)
}
export default Update;