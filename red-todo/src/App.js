import React from 'react';
import './App.css';
import { TodoReducer } from './reducers/reducers'
import { TodoContext } from './contexts/TodoContext'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
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
  // dispatch({
  //   type: 'toggleComplete', payload: {
  //     item: 'Learn about reducers',
  //     completed: false,
  //     id: 3892987589
  //   }
  // })
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div className="App">
        <TodoList />
        <TodoForm />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
