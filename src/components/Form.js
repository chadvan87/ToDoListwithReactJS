//Tao form va filter
import React, { useEffect, useState } from "react"; //import react vao
import { STATUS_NAME } from "../constant/constants";
 
const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  editTodo,
  setEditTodo,
}) => {
  //tao props setInputText
  //
  const inputTextHandler = (e) => {
    //e short for event
    setInputText(e.target.value); //set input text = value cua event
  };
 
  //Update To do List
  const updateTodo = (text, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { text, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
 
  const submitTodoHandler = (e) => {
    //su dung nut Add Task
    e.preventDefault(); //ko refresh page
    if (!editTodo) {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText(""); // Empty the input after click "Add Task" (Set state to empty but rmb to change value so that UI update with state)
    } else {
      updateTodo(inputText, editTodo.id, editTodo.completed);
    }
  };
  const [statusName, setStatusName] = useState(STATUS_NAME.all); //Initial state is all
  const statusHandler = (name) => {
    //Function to handle completed uncompleted event
    setStatusName(name); //This is for active and inactive effect
    setStatus(name); //This is for the filter stuffs
  };
  const { all, completed, uncompleted } = STATUS_NAME;
  //Use Effect to display the text on the input
  useEffect(() => {
    if (editTodo) {
      setInputText(editTodo.text);
    } else {
      setInputText("");
    }
  }, [setInputText, editTodo]);
 
  return (
    <div>
      <input
        className="input"
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        placeholder="New Task"
      />
      <div>
        <br></br>
        <button className="add" onClick={submitTodoHandler} type="submit">
          Add
        </button>
      </div>
      <br></br>
      <div className="status-btn">
        <button
          className={`status-btn ${statusName === all && "btn--active"}`}
          value="All"
          onClick={() => statusHandler(STATUS_NAME.all)}
        >
          All
        </button>
        <button
          className={`status-btn ${statusName === completed && "btn--active"}`}
          value="Completed"
          onClick={() => statusHandler(STATUS_NAME.completed)}
        >
          Completed
        </button>
        <button
          className={`status-btn ${
            statusName === uncompleted && "btn--active"
          }`}
          value="Uncompleted"
          onClick={() => statusHandler(STATUS_NAME.uncompleted)}
        >
          Uncompleted
        </button>
      </div>
    </div>
  );
};
export default Form;