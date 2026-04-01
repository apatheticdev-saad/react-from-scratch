import { useState, useEffect } from "react"




function App() {



    const [joke, setJoke] = useState("")
    const [loading, setLoading] = useState(true) //To show loading till the joke comes

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(response => response.json())
            .then(data => {
                setJoke(data.value)
                setLoading(false) //If joke comes, then loading disappears
            })
    }, [])

    return (
        <>
            <h1>Random Joke</h1>
            {loading ? <p>Loading...</p> : <p>{joke}</p>}
        </>
    )
}

export default App


// if want implement button "next joke", and joke changes then,
// Move the full .then() chain inside fetchJoke so the function handles everything itself:


// jsxfunction fetchJoke() {
//     fetch("https://api.chucknorris.io/jokes/random")
//         .then(response => response.json())
//         .then(data => {
//             setJoke(data.value)
//             setLoading(false)
//         })
// }


// Then useEffect becomes simply:


// jsxuseEffect(() => {
//     fetchJoke()
// }, [])


// and on button put this :  onClick={fetchJoke} 






// -----------------------------------------------------------------

// This code is simple to display joke

// function App() {

//     const [joke, setJoke] = useState("")

//     useEffect(() => {
//         fetch("https://api.chucknorris.io/jokes/random")
//             .then(response => response.json())
//             .then(data => {
//                 setJoke(data.value)
//                 // .then means waiting for the response
//             })
//     }, [])

//     return (
//         <>
//             <h1>Random Joke</h1>
//             <p>{joke}</p>
//         </>
//     )
// }

// export default App



// --------------------------------------------------------------------

// This is just a demo code :

// function App() {
//     useEffect(() => {
//         console.log("Component loaded Successfully Bro!")
//     }, [])

//     return (
//       <>
//     <h1>Hello To Next Topic</h1>
//     <h2>This is to demonstrate useEffect</h2>
//     </>
//   )
// }

// export default App