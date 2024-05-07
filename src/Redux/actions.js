export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO='DELETE_TODO'
export const CHECK_BOX ='CHECK_BOX';

export const addTodo = (text) => ({
  type: ADD_TODO, // Using the string value directly
  payload: text
});
export const deleteTodo=(key) =>({
    type:'DELETE_TODO',
    payload:key
})
export const checkBox=(key)=>({
    type:'CHECK_BOX',
    payload :key
})
