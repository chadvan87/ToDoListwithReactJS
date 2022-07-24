const initState = {
    todoList: [
        {text: 'test', completed: false, id: Math.random() * 1000}
    ]
}
const rootReducer = (state = initState, action) => {
    console.log({state,action});
    switch(action.type){
        case 'todoList/addTodo':
            return{
                ...state, //copy object
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        default:
            return state;
    }
}
export default rootReducer;