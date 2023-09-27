import { Box, Button, TextField } from "@mui/material"
import React, { useState, useEffect } from "react"

const MyForm = () => {
    //const [name, setName] = useState("") //React.useState()
    //const [school, setSchool] = useState("")

    const [myForm, setMyForm] = useState(null)

    const saveFields = event => {
        setMyForm(previous => ({
            ...previous,
            [event.target.name]: event.target.value
        }))
    }

    const submitForm = event => {
        event.preventDefault()
        console.log(myForm)
    }



//    useEffect(() => {
//        console.log("no depedency array")
//    })
    useEffect(() => {
        console.log("empty dependency array")
    }, [])
//    useEffect(() => {
//        console.log("my form updated")
//    }, [myForm])

    return (
        <form onSubmit={submitForm}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "2em"
                }}>
                <TextField
                    //required
                    name="Name"
                    id="outlined-required"
                    label="Name"
                    onChange={saveFields}></TextField>
                <TextField
                    //required
                    name="School"
                    id="outlined-required"
                    label="School"
                    onChange={saveFields}></TextField>
                <Button
                    type="submit"
                    variant="contained">
                    Submit
                </Button>
            </Box>
        </form>
    )
}

export default MyForm
