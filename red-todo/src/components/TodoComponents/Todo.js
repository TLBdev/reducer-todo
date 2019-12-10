import React from 'react';
import './Todo.css'
import { TodoContext } from '../../contexts/TodoContext'
const ToDo = props => {
    const { todos, dispatch } = React.useContext(TodoContext)
    const handleClick = (e) => {
        console.log(todos)
        dispatch({ type: 'toggleComplete', payload: props.item.id })
    }
    // onClick={dispatch({ type: 'toggleComplete', payload: props.item })}
    return (
        <div className={props.item.completed ? 'completed' : ''} onClick={handleClick} >
            <p>{props.item.item}</p>
        </div>
    );
};

export default ToDo;