import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Hello
                    name="Stella"
                    age={1}
                    school="TLU"
                />
                <Maths />
                <Maths />
                <Maths />
                {/* <Hello
                    name="Mari"
                    age={2}
                />
                <Hello name="Juhan"/> */}
            </header>
        </div>
    )
}

export default App
