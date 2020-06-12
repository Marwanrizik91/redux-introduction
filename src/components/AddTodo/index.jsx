import React from 'react'
import { addTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";

const AddTodo = () => {
    const [description, setDescription] = React.useState()
    const dispatch = useDispatch()

    return (
        <form
            style={{ display: 'flex' }}
            onSubmit={(event) => {
                event.preventDefault()
                dispatch(addTodo(description))
                setDescription('')
            }}
        >
            <input
                type="text"
                onChange={({ target }) => setDescription(target.value)}
                className="add-todo"
                name=""
                value={description}
            />
            <button type="submit">
                Add
            </button>
        </form>
    )
}

export default AddTodo