import React, { useState } from 'react'
import { TodoContext } from '../../contexts/TodoContext'

function ToDoForm() {
    const [input, setInput] = useState('')
    const { todos, dispatch } = React.useContext(TodoContext)
    const handleChange = (e) => {
        setInput(e.target.value)
        console.log(input)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'addTodo', payload: input })
        setInput('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={handleChange} type='text'></input>
            <button type='submit'>Add Task</button>
        </form>
    )
}

export default ToDoForm