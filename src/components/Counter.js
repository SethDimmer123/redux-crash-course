import { useState } from "react"
import Counter2 from "./Counter2"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { increment, incrementByAmount } from "../redux/counterSlice"
import { decrement } from "../redux/counterSlice"

export default function Counter() {
    // const [count, setCount] = useState(0)

    // const count = 0 //takes away error

    // const count = useSelector(state => {
    //     console.log(state)
    //     return state.counter.count
    // })

    const count =useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h1> Count is {count}</h1>
            <button
            onClick={() => dispatch(increment()
            )}>Increment</button>


            <button onClick={() => dispatch(decrement()
            )}>Decrement</button>

            <button onClick={() => dispatch(incrementByAmount(20)
            )}>Increment By Amount</button>
        </div>
    )
}