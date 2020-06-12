import { TOGGLE_TODO, ADD_TODO, SET_FILTER } from './constants'

export const toggleAction = (id) => ({
    type: TOGGLE_TODO,
    payload: {
        id
    }
})

export const addTodo = (description) => ({
    type: ADD_TODO,
    payload: {
        description
    }
})

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: {
        filter
    }
})