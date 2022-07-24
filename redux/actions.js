// export const addTodoAction = 
// {
//     type: 'todoList/addTodo',
//     payload: {text: 'test2', completed: false, id: Math.random() * 1000}
// }

export const addTodo =(data) => { //action creator
    return {
        type: 'todoList/addTodo',
        payload: data
    }

}