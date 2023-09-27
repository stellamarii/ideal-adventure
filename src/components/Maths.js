import React, { useState } from "react"

const Maths = () => {
    const [count, setCount] = useState(0)

    function incrementCount(nr) {
        setCount(previousCount => previousCount + nr)
    }
    function decrementCount(nr) {
        setCount(previousCount => previousCount - nr)
    }
    return (
        <>
            <div>{count}</div>
            <button onClick={incrementCount(1)}>+1</button>
            <button onClick={incrementCount(10)}>+10</button>
            <button onClick={incrementCount(100)}>+100</button>
            <button onClick={decrementCount(1)}>-1</button>
            <button onClick={decrementCount(10)}>-10</button>
            <button onClick={decrementCount(100)}>-100</button>
        </>
    )
}

export default Maths
