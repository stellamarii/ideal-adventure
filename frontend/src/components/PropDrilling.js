import React, { useContext } from "react"
import { useState, createContext } from "react"

const WeatherContext = createContext(null)

const PropDrilling = () => {
    const [weather, setWeather] = useState("sun")

    const changeWeather = () => setWeather("rain")

    return (
        <WeatherContext.Provider value={{weather, changeWeather}}>
            <Europe />
        </WeatherContext.Provider>
    )
}

const Europe = () => {
    return <Estonia />
}
const Estonia = () => {
    return <Tallinn />
}
const Tallinn = () => {
    const {weather, changeWeather} = useContext(WeatherContext)
    return <div onClick={changeWeather}>{weather}</div>
}

export default PropDrilling
