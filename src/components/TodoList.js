import React from "react";
//Import Components
import Todo from "./Todo";
const TodoList = ({todos, setTodos, filteredTodos, setEditTodo}) =>{
    
    return(
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map((todo) =>(
                        <Todo 
                        setTodos={setTodos} 
                        todos={todos}
                        text={todo.text} 
                        todo={todo}
                        key={todo.id} 
                        setEditTodo = {setEditTodo}
                        />
                    )
                    )}
                    {/*From each to do from state that we have
                    we will render out Todo componenets*/}
                    {/*Xai Key=id de React biet can delete cai nao {}*/}
                </ul>
               
            </div>
        </div>
    );
}
 
export default TodoList;