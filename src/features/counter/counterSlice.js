import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name:"counter",
    initialState:{count:0},
    reducers: {
        increment:state => {
            state.count = state.count + 1
        },
        increaseBy5:state => {
            state.count = state.count + 5
        },
        decrement:state => {
            state.count = state.count - 1
        },
        decreaseBy5:state => {
            state.count = state.count - 5
        },
        increaseByAmount:(state, action) => {
            state.count = state.count + action.payload;
        },
        reset: state => {
            state.count = 0
        }
    }
})

export const {increment, increaseBy5, decrement, decreaseBy5, increaseByAmount, reset} = counterSlice.actions;
export default counterSlice.reducer;