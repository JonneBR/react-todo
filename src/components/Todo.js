import React from 'react';

const Todo = ({ text, todo, items, setTodos }) => {
  //Fix empty string bug
  const removeItem = () => {
    setTodos(items.filter((item) => item.id !== todo.id));
  };

  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="completed-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={removeItem} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
