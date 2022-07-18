import React, { useState, useEffect, createContext } from "react";
import "./App.css";
//import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import ReactSwitch from "react-switch";
import { STATUS_NAME } from "./constant/constants";
 
export const ThemeContext = createContext(null);
 
//Use effect change a function everytime a state change
function App() {
  const { all, completed, uncompleted } = STATUS_NAME;
  const [inputText, setInputText] = useState(""); //use state accept initial state and return current state and a function update state
  const [todos, setTodos] = useState([]); //Use array of objects to Set To DO List
  const [status, setStatus] = useState(all);
  const [filteredTodos, setFilteredTodos] = useState([]); //list of object
  const [editTodo, setEditTodo] = useState(null);
 
  //use effect
  useEffect(() => {
    // other code
    filterHandler();
    // eslint-disable-next-line
  }, [todos, status]);
 
  //Loc status of the to do list
  const filterHandler = () => {
    switch (status) {
      case completed:
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case uncompleted:
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
 
  //Clear all
  const clearAll = () => {
    setTodos([]); //Empty the state list
  };
 
  //Save the Todolist to local storage
  const [theme, setTheme] = useState("light"); //Dung use state de set theme cho light dark mode
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light")); //If theme is light change to dark vice versa
  };
 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Add the Switch to the App */}
 
      <div className="switch">
        <ReactSwitch
          onChange={toggleTheme}
          checked={theme === "dark"}
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </div>
 
      <div className="App" id={theme}>
        <h1>To do List</h1>
        <Form
          setInputText={setInputText}
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />{" "}
        {/*Get the func setInputText and put it in the from props*/}
        <TodoList
          setTodos={setTodos}
          todos={todos}
          filteredTodos={filteredTodos}
          setEditTodo={setEditTodo}
        />{" "}
        {/*props in todos*/}
        <br></br>
        <button className="clear_btn" onClick={clearAll}>
          Clear All
        </button>
      </div>
    </ThemeContext.Provider>
  );
}
 
export default App;