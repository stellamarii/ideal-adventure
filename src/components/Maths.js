import React, { useState } from "react"

const Maths = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count + 10)}>+10</button>
            <button onClick={() => setCount(count + 100)}>+100</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(count - 10)}>-10</button>
            <button onClick={() => setCount(count - 100)}>-100</button>
        </>
    )
}

export default Maths
