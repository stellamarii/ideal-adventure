import { useState } from "react"
import "./App.css"
import Toggle from "./components/Toggle"
import Show from "./components/Show"
import Maths from "./components/Maths"
import MyForm from "./components/MyForm"
import PropDrilling from "./components/PropDrilling"
import Fetching from "./components/Fetching"

function App() {
    const [show, setShow] = useState(true)
    const toggleShow = () => setShow(previousShow => !previousShow)

    return (
        <div className="Container">
            <PropDrilling />
            <h1>Hi</h1>
            <MyForm />
            <Maths />
            <Show show={show} />
            <Toggle toggleShow={toggleShow} />
            <Fetching />
        </div>
    )
}

export default App
