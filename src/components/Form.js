import React, { Fragment } from 'react';

const Form = ({ setInputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  return (
    <Fragment>
      <form>
        <input onChange={inputTextHandler} type="text" className="form-input" />
        <button className="form-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
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
