import React, { useState } from "react";
 
const Todo = ({text, todo, todos, setTodos, setEditTodo}) => {
    //render out the text
    //Events
    //Function for delete button
    const deleteHandler =()=> {
        setTodos(todos.filter((el)=> el.id !== todo.id)); //compare element that user click on match the element of state use filter
        //console.log(todo);
    };
 
    const handleEdit = ({id}) =>{
        const findTodo= todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }
 
    //Function for checkbox button
    const completeHandler = () =>{
        setTodos(todos.map(item =>{ //Tim item id trung vs id user click va doi item complete tu true sang false hoac nguoc lai
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed //doi completed thanh uncompleted va ngc lai
                }
            }
            return item; //neu k tim dc gi thi cu return item bth
        }))
    }
    
    const [color,setColor] = useState("white")
    //function to random a list
    function get_random (list) {
        return list[Math.floor((Math.random()*list.length))];
    }
    
      
    const randomColor = () =>{
       setColor(get_random(['white','black','red','orange', 'blue', 'green']))
    }
   

    return(
        // <div className={`todo ${todo.completed ? "completed" : ""}`}>
        <div className="todo">
            {/*This is list of to do list if  */}
            <li className={`todo-item ${color}`}>{text}</li> 
            <div className="btn-group">
            <button onClick={completeHandler} 
                className="check-btn">
                {/* {todo.completed? <i className="fas fa-check-square"></i> : <i className="far fa-square "></i>} */}
                <i className="far fa-square "></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn" >
                <i className="fas fa-trash"></i>
            </button>
           
 
            <button className="edit-btn" onClick={() => handleEdit(todo)}>
            <i className="far fa-edit"></i>
            </button>
 
            <button className="color-btn" onClick={()=>{
                randomColor()
            }}>
            <i className="fas fa-palette"></i>

            </button>
            </div>
            
        </div>
    );
}
export default Todo;