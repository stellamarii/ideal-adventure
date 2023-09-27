import { useState } from "react"
import "./App.css"
import Toggle from "./components/Toggle"
import Show from "./components/Show"

function App() {
    const [show, setShow] = useState(true)
    const toggleShow = () => setShow(previousShow => !previousShow)

    return (
        <div className="Container">
            <h1>Hi</h1>
            <Show show={show} />
            <Toggle toggleShow={toggleShow} />
        </div>
    )
}

export default App
