import { useState } from "react"

function App() {
    const [count, setCount] = useState(0) // it contains the initial value to be displayed

    function addOne() {
      if(count < 20){

        setCount(count + 1)
    }
  }
    function removeOne()
    {
    if(count > 0){
      setCount(count - 1)
    }
  }
  function doReset()
  {
    if(count !=0)
      setCount(0)
  }
  
    return (
        <>
            <h1>Counts - {count}</h1>
            <button onClick={addOne}>Add 1</button>
            <br></br>
            <button
            onClick={removeOne}
            >Remove 1</button>
            <br></br>
            <button
            onClick={doReset}
            >Reset</button>

        </>
    )
}
export default App // must