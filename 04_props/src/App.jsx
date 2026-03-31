import Welcome from "./Welcome"
import Birthday from "./Birthday"

function App() {
    return (
        <>
           <Welcome name="Saad" age={19} city="Hyderabad" />
            <div>

    <Birthday name="Saad"/>
    <Birthday name="Ram"/>
    <Birthday name="Aman"/>

    </div>
        </>
    )
}

export default App


