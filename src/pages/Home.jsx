import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '/home/raju/Desktop/Todo list app/client/src/Redux/actions.js';
import Todo from '/home/raju/Desktop/Todo list app/client/src/components/Todo.jsx';

const Home = () => {
    const [todoText, setTodoText] = useState('');
    const todos = useSelector((state) => state.Todos) || [];
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTodoText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ id: todos.length + 1, text: todoText,completed:false }));
        setTodoText('');
    }
 
    return (
        <div style={{backgroundImage: `url('/todo.jpg')`,backgroundSize:'cover',height:'200vh'}}>
            <div>
            <AppBar position="static" style={{height:'30%'}}>
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      To-DO List Homepage
    </Typography>
  </Toolbar>
</AppBar>
            
</div>
            <div style={{marginLeft:'35%',marginTop:'4%',padding:'8px',}}>
                <form onSubmit={handleSubmit}>
                <TextField label=" One More Todo" color="secondary"  
                style={{ width:'42%'}}name='todo' value={todoText} placeholder='Enter todo here' onChange={handleChange} focused />
                   
                <Button type='submit' variant="contained" color="success" style={{marginTop:'5px',marginLeft:'2px',
            cursor:'pointer'}}>
                     Add   
</Button>
                </form>
            </div>
            <div>
            <Typography variant="h6" color="inherit" component="div" style={{marginLeft:'36%',
        textDecoration:'underline',fontFamily:'cursive',color:'red'}}>
      List
    </Typography>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',flexWrap:'wrap'}}>
                {
                    todos.map((todo) => {
                        return <Todo key={todo.id} todo={todo} />
                    })
                }
            </div>
        </div>
    );
}

export default Home;
