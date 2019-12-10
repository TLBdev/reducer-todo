import React from 'react'
import ToDo from './Todo'
import { TodoContext } from '../../contexts/TodoContext'
const ToDoList = () => {
    const { todos, dispatch } = React.useContext(TodoContext)
    return (
        <div className='todolist'>
            {toDos.map(i => (
                <ToDo key={i.id} item={i} />
            ))}
            <button onClick={props.clearCompleted}>Remove Completed</button>
        </div>
    )
}

export default ToDoList