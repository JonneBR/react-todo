import React from 'react';

const Todo = ({ text, setTodo, items }) => {
  const removeItem = (e) => {
    const divElement = e.target.parentElement;
    setTodo(items.filter((item) => item.text !== divElement.innerText));
    // console.log('setTODO', item);
    console.log('setTODO', divElement.innerText);
    // console.log(divElement);
    // console.log('DEPOIS', teste);
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
