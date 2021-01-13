import React from 'react';

const Todo = ({ text, todo, items, setTodos }) => {
  const removeItem = () => {
    setTodos(items.filter((item) => item.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      items.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="completed-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={removeItem} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
