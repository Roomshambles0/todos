import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Landing from './Landing.jsx';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Appbar from './Appbar.jsx';
import Todos from './Todos.jsx';
import Update from './Update.jsx';


function App() {

  return (
        <div>
          <Paper elevation={3}  style={{ width: "100%",
      minHeight: "100vh",
      backgroundColor:'gray'
      }}>
    <RecoilRoot>
    <Router> 
      <Appbar/> 
      <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/alltodos' element={<Todos />}/>
      <Route path='/edittodos/:id' element={<Update />}/>
      </Routes>  
    </Router>
    </RecoilRoot>
    </Paper>
    </div>
  

  )
}

export default App;
