import React from 'react';
import './App.css';
import { TodoReducer } from './reducers/reducers'
import { TodoContext } from './contexts/TodoContext'

function App() {
  const initialState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }
  ]
  const [todos, dispatch] = React.useReducer(TodoReducer, initialState)
  console.log(todos)
  // dispatch({type: 'addTodo', payload: {item: 'test', completed: false, id: 5}})
  
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div className="App">

      </div>
    </TodoContext.Provider>
  );
}

export default App;
