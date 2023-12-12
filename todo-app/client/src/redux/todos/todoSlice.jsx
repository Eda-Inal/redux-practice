import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name : 'todos',
    initialState : {
        items : [{
            id : 1,
            title : 'Learn React',
            completed: true
        }, {
            id:2,
            title : 'Read a book',
            completed : false
        }],
        activeFilter : 'all'

    },
    // //addTodo :(state,action) => {
    //     state.items.push(action.payload)
    // },prepare kullanmadan öncesi 

    //addTodo : (state,action) => {
        // state.items.push({id : nanoid(),title:action.payload.title,completed:false})} şeklinde de prepare kullanmadan yapılabilir
        //ilk olarak prepare a title payload olarak gönderiliyor sonra payload return ediliyor sonrasında return edilen payload ( reducer:(state,action)) action içerisine düşüyor
    
    reducers : {
        addTodo :{
            reducer:(state,action) => {
                state.items.push(action.payload)
            },
            prepare:({title}) => {
              return {
                payload: {
                    id : nanoid(),
                    completed:false,
                    title

                }
              }
            }
        },
        toogle : (state,action) => {
            const {id} = action.payload;
            const item = state.items.find((item) => item.id ===id);
            item.completed = !item.completed;
        },
        destroy : (state,action) =>{
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered
},
changeActiveFilter : (state,action) => {
    state.activeFilter = action.payload;
},
clearCompleted : (state) => {
    const filtered = state.items.filter(item => item.completed === false);
    state.items = filtered;
}
        

    },
});
export const selectTodos = (state) => state.todos.items;
export const selectFilteredTodos = (state) => {
    if(state.todos.activeFilter === 'all'){
        return state.todos.items;
    }
    return state.todos.items.filter((todo) => state.todos.activeFilter === 'active' ? todo.completed == false : todo.completed == true)
};
export const selectActiveFilter = (state) => state.todos.activeFilter;
export const {addTodo,toogle,destroy,changeActiveFilter,clearCompleted} = todoSlice.actions;
export default todoSlice.reducer;