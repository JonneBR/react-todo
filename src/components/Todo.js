import React from 'react';

const Todo = ({ text }) => {
  console.log('todo', text);
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="completed-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
