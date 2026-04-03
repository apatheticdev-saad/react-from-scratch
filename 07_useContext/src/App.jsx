import { useState } from "react"
import ThemeContext from "./ThemeContext"
import Page from "./Page"

function App() {
    const [theme, setTheme] = useState("light")

    function toggleTheme() {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    return (
        <ThemeContext.Provider value={theme}>
            <button onClick={toggleTheme}>Switch Theme</button>
            <Page />
        </ThemeContext.Provider>
    )
}

export default App