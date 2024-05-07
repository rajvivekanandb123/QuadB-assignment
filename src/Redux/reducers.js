import { ADD_TODO, DELETE_TODO, CHECK_BOX } from '/home/raju/Desktop/Todo list app/client/src/Redux/actions.js';

const initialState = {
    Todos: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                Todos: [...state.Todos, action.payload]
            };
        case DELETE_TODO:
            return {
                ...state,
                Todos: state.Todos.filter(todo => todo.id !== action.payload)
            };
        case CHECK_BOX:
            return {
                ...state,
                Todos: state.Todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            };
        default:
            return state;
    }
};

export default reducer;
