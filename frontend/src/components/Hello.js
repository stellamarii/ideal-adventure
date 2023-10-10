import React from "react"

/* const Hello = props => {
    return <div>Hi, {props.name}</div>
} */

/* const Hello = props => {
    //const name = props.name
    const { name } = props
    return <div>Hi, {name}</div>
} */

/* const Hello = ({ name }) => {
    return <div>Hi, {name}</div>
} */

const Hello = ({ name, age }) => (
    <div>
        Hi, {name} {age}!
    </div>
)

export default Hello
