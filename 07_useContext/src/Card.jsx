import { useContext } from "react"
import ThemeContext from "./ThemeContext"

function Card() {
    const theme = useContext(ThemeContext)

    const styles = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        padding: "20px",
        marginTop: "20px"
    }

    return (
        <div style={styles}>
            <h2>I am a Card</h2>
            <p>Current theme is — {theme}</p>
        </div>
    )
}

export default Card