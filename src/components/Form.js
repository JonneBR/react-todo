import React, { Fragment } from 'react';

const Form = ({
  todos,
  setTodos,
  inputText,
  setInputText,
  setStatus,
  filteredTodos,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText('');
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <Fragment>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="form-input"
        />
        <button
          onClick={submitTodoHandler}
          className="form-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
