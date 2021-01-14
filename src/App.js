import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //UseEffect

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed !== false));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed !== true));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }

    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, status]);

  //Functions are above, not being used here in order to avoid warnings

  // const filterHandler = () => {
  //   switch (status) {
  //     case 'completed':
  //       setFilteredTodos(todos.filter((todo) => todo.completed !== false));
  //       break;
  //     case 'uncompleted':
  //       setFilteredTodos(todos.filter((todo) => todo.completed !== true));
  //       break;
  //     default:
  //       setFilteredTodos(todos);
  //       break;
  //   }
  // };

  // const saveLocalStorage = () => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // };
  // Save to Local

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
