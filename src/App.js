import { ThemeProvider, createTheme } from "@mui/material/styles"
import "./App.css"
import Layout from "./layout/Layout"
import { Outlet } from "react-router-dom"
import Header from "./layout/Header"
import { useLocation } from "react-router-dom"
import { Typography } from "@mui/material"

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "rgb(254, 217, 255)"
        }
    }
})

function App() {
    let location = useLocation()

    return (
        <ThemeProvider theme={theme}>
            <Header title="ideal-potato" />
            <Layout>
                {location?.pathname === "/" && (
                    <Typography
                        variant="h4"
                        sx={{ marginLeft: 10, marginTop: 5 }}>
                        Welcome to my humble abode
                    </Typography>
                )}
                <Outlet />
            </Layout>
        </ThemeProvider>
    )
}

export default App;