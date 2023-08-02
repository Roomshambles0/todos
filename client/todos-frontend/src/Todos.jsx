import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todotitle } from "./store/selectors/todotitle";
import { tododescription } from "./store/selectors/tododescription";
import { todoState } from "./store/atoms/todo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';


export default function Todos(){
 const [Todos, setTodos] = useState([]);
    const init = async () => {
        const response = await axios.get(`http://localhost:3000/todos`, {
            headers: {
              "Content-type": "application/json"
            }
        })
        setTodos(response.data)
    }
     init();
   

    return <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {Todos.map(todo => {
            return <Todo todo ={todo}/>}
        )}
    </div>
}


function Todo({todo}){
  const navigate = useNavigate();
    return<>
   
    <Card style={{
          margin: 10,
          width: 300,
          minHeight: 80,
          padding: 20
      }}>
    <CardContent >
          <Typography  variant="h5" component="div">
           {todo.title} 
          </Typography>  
          <Typography variant="body2" color="text.secondary">
          {todo.description}
          </Typography>
        </CardContent>  
        <CardActions>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Button size="small" onClick={()=>{navigate('/edittodos/'+ todo.id)}}>Edit</Button>
          <Button variant="contained" size="smll" onClick={()=>{
        axios.delete('http://localhost:3000/todos/'+ todo.id,{
          headers:{
            "Content-type": "application/json"
          }
        })
       }}>Complete</Button>
          </div>
        </CardActions>
        </Card>
       
        </>
       
}