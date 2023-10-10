import React from "react"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"

const ToDo = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch(
            "http://localhost:8080/todo"
        )
        const data = await response.json()
        console.log(data)
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h2>ToDo</h2>
            <ul>
                {data.map(({id, title, priority}) => (
                    <ul>
                        <li key={id}>
                            <h3>{title}</h3>
                            <p>Priority: {priority}</p>
                            <Button
                                variant="contained"
                                //onClick={() => changeCount(number)}
                                sx={{ marginBottom: 1 }}>
                                Delete todo
                            </Button>
                        </li>
                    </ul>
                ))}
            </ul>
        </div>
    )
}

export default ToDo
