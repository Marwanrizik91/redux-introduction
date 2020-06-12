import { v4 } from "uuid";
import { ADD_TODO, TOGGLE_TODO, SHOW_ALL, SET_FILTER } from "./constants";
import { combineReducers } from "redux";

const initialState = {
    todos: [],
    filter: SHOW_ALL
};

function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const { description } = action.payload;
            return {
                ...state,
                todos: [...state.todos, { description, id: v4(), done: false }]
            };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                todos: state.todos.map((todo) => ({
                    ...todo,
                    done: todo.id === id ? !todo.done : todo.done
                }))
            };
        }
        case SET_FILTER: {
            return {
                ...state,
                filter: action.payload.filter
            };
        }
        default:
            return state;
    }
}

export default combineReducers({ todoState: todosReducer })