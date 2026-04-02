import { useRef } from "react"

function App() {
    const boxRef = useRef(null)

    function makeRed() {
        boxRef.current.style.backgroundColor = "red"
    }

    function makeGreen() {
        boxRef.current.style.backgroundColor = "green"
    }

    function makeBlue() {
        boxRef.current.style.backgroundColor = "blue"
    }

    return (
        <>
            <div
                ref={boxRef}
                style={{ width: "200px", height: "200px", backgroundColor: "gray" }}
            >
            </div>
            <br />
            <button onClick={makeRed}>Red</button>
            <button onClick={makeGreen}>Green</button>
            <button onClick={makeBlue}>Blue</button>
        </>
    )
}

export default App



// Another example

// import { useRef } from "react"

// function App() {
//     const count = useRef(0)

//     function handleClick() {
//         count.current = count.current + 1
//         console.log("Clicked", count.current, "times")
//     }

//     return (
//         <button onClick={handleClick}>Click me</button>
//     )
// }

// export default App