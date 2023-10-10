import React from "react"
import { useEffect, useState } from "react"

const Cats = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch(
            "http://localhost:8080/cats"
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
            <h2>Cats</h2>
            <ul>
                {data.map(({name}) => (
                    <ul>
                        <li>{name}</li>
                    </ul>
                ))}
            </ul>
        </div>
    )
}

export default Cats
