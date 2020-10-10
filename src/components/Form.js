import React from "react";



const Form = ({setInputText,setTodos,todos,inputText, setStatus}) => {
    /// js code
    const inputTextHandler = (e) => {
       
        setInputText(e.target.value);
    };

    const submitTodoHandeler = (e) => {
      e.preventDefault();
      setTodos([
        ...todos,{text: inputText, completed: false, id:Math.random()*1000}
      ]);

      setInputText('');

    };

    const statusHandler = (e) => {
      setStatus(e.target.value);
    }

    return(
<form>
      <input value={inputText} onChange={inputTextHandler} type="text" classNameName="todo-input" />
      <button onClick={submitTodoHandeler} classNameName="todo-button" type="submit">
      Add
        <i classNameName="fas fa-plus-square"> </i>
      </button>

      <div classNameName="select">
        <select onChange={statusHandler} name="todos" classNameName="filter-todo">
        <option  classNameName="fas fa-plus-square"> ----></option>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    ); 
}

export default Form;