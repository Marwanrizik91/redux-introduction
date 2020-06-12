import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/actions";
import { SHOW_ALL, SHOW_DONE } from '../../redux/constants'

const FilterRow = () => {
    const filter = useSelector(state => state.todoState.filter)
    const dispatch = useDispatch()

    return (
        <div style={{ marginTop: '20px' }}>
            <button
                onClick={() => dispatch(setFilter(SHOW_ALL))}
                className={`filter ${filter === SHOW_ALL && 'filter--active'}`}
            >
                All
            </button>

            <button
                onClick={() => dispatch(setFilter(SHOW_DONE))}
                className={`filter ${filter === SHOW_DONE && 'filter--active'}`}
            >
                Done
            </button>
        </div>
    )
}

export default FilterRow