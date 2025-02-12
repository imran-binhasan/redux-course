import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name:"todos",
    initialState:{todos: 0},
    reducers:{
          increment2:state => {
          state.count = state.count+1
        },
          decrement2:state => {
          state.count = state.count-1
        },
          reset2:state => {
          state.count = 0
        },
    }
})
export const {increment2,decrement2,state2} = todosSlice.actions
export default todosSlice.reducer;