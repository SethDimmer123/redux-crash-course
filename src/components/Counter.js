import { useState } from "react"
import Counter2 from "./Counter2"

export default function Counter() {
    const [count, setCount] = useState(0)
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