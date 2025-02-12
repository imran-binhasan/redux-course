import { useDispatch, useSelector } from "react-redux";
import { decreaseBy5, decrement, increaseBy5, increaseByAmount, increment, reset } from "./counterSlice";

const CounterView = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
            <button onClick={()=>{dispatch(reset())}}>Reset</button>
            <button onClick={()=>{dispatch(increaseBy5())}}>Increase by 5</button>
            <button onClick={()=>{dispatch(decreaseBy5())}}>Decrease by 5</button>
            <button onClick={()=>{dispatch(increaseByAmount(500))}}>Increase By Amount</button>
        </div>
    );
};

export default CounterView;