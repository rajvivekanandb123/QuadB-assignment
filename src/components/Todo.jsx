import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, checkBox } from '/home/raju/Desktop/Todo list app/client/src/Redux/actions.js';
import { Checkbox, Button } from '@mui/material';

const Todo = ({ todo }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    }

    const handleChange = () => {
        dispatch(checkBox(todo.id));
    }

    return (
        <div style={{ border: 'solid blue 2px', width: '30%', borderRadius: '12px', marginBottom: '4px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox checked={todo.completed} onChange={handleChange} />
                <div style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: 'white', fontFamily: 'revert', marginLeft: '8px', 
            fontSize:'130%'}}>{todo.text}</div>
            </div>
            <Button variant="contained" color="secondary" onClick={handleDelete} style={{ marginTop: '8px'
        ,marginRight:'0px' }}>
                Delete
            </Button>
        </div>
    );
}

export default Todo;
