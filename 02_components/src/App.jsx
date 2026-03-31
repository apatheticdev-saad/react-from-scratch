import Welcome from "./Welcome";

function App(){
  return(
    <div>
      <h1>I Just understood Components ! </h1>
      <Welcome/>
    </div>
  )
}

export default App

// How to run ?
//  Command to run - npm run dev

// Imp Note :
// Component returns only single parent , thats why we wrap them
// either in div or in fragment

// Example for fragment : 

//  return(
//     <>
//       <h1>I Just understood Components ! </h1>
//       <Welcome/>
//     </>