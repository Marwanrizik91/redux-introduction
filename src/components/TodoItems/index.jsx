import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { toggleAction } from "../../redux/actions";
import { SHOW_DONE } from "../../redux/constants";

const TodoItems = () => {
    const todos = useSelector(state => {
        if (state.todoState.filter === SHOW_DONE) {
            return state.todoState.todos.filter(({ done }) => done)
        }

        return state.todoState.todos
    })
    const dispatch = useDispatch()

    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <div>
                    <span className={`todo-item ${todo.done && 'todo-item__text--completed'}`}>
                        {todo.description}
                    </span>
                    <button onClick={() => dispatch(toggleAction(todo.id))}>Completed</button>
                </div>
            ))}
        </div>
    )
}

export default TodoItems