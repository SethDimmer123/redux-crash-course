import { useState } from "react"
import Counter2 from "./Counter2"
import { useSelector } from "react-redux"

export default function Counter() {
    // const [count, setCount] = useState(0)

    const count = 0 //takes away error

    const count2 = useSelector(state => {
        console.log(state)
    })
    return (
        <div>
            <h1> Count is {count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increment</button>


            <button onClick={() => {
                setCount(count - 1)
            }}>Decrement</button>
        </div>
    )
}