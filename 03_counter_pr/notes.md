# State and useState in React

## What is State?

State is data that **changes over time** in your app. When state changes, React automatically updates the screen.

Examples of state:
- A counter value increasing on button click
- Todo items being added or removed
- A form input value as user types

---

## Why Not Just Use a Normal Variable?

```jsx
let count = 0

function addOne() {
    count = count + 1
    console.log(count) // updates in console
}

return <h1>{count}</h1> // never updates on screen
```

The variable changes — but React has **no idea** it changed. So the screen never updates.

This is exactly the problem `useState` solves.

---

## useState — The Solution

```jsx
import { useState } from "react"

function App() {
    const [count, setCount] = useState(0)
}
```

### Breaking it down:

- `count` — the actual value. This is what you display on screen
- `setCount` — the function you call to **change** the value
- `useState(0)` — `0` is the starting value
- Always import `useState` from `"react"` at the top

---

## The Golden Rule of State

> **Never modify state directly. Always use the setter function.**

```jsx
// ❌ Wrong
count = count + 1

// ✅ Correct
setCount(count + 1)
```

When you use `setCount`, React knows the value changed and re-renders the screen automatically.

---

## Full Counter Example

```jsx
import { useState } from "react"

function App() {
    const [count, setCount] = useState(0)

    function addOne() {
        if(count < 20) {
            setCount(count + 1)
        }
    }

    function removeOne() {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    function doReset() {
        if(count != 0) {
            setCount(0)
        }
    }

    return (
        <>
            <h1>Counts - {count}</h1>
            <button onClick={addOne}>Add 1</button>
            <br />
            <button onClick={removeOne}>Remove 1</button>
            <br />
            <button onClick={doReset}>Reset</button>
        </>
    )
}

export default App
```

---

## Event Handling — onClick

To run a function when a button is clicked, use `onClick`:

```jsx
<button onClick={addOne}>Add 1</button>
```

- Pass the function **reference** — `onClick={addOne}` ✅
- Do NOT call it — `onClick={addOne()}` ❌ — this runs immediately on render, not on click

---

## Why const and Not let?

```jsx
const [count, setCount] = useState(0)
```

`const` is used because `count` and `setCount` are never **reassigned directly**. You never write `count = something`. You only call `setCount()` as a function. So `const` is semantically correct here.

---

## Key Takeaways

- State = data that changes and should update the screen
- `useState(initialValue)` returns `[value, setterFunction]`
- Always use the setter function to change state — never modify directly
- React re-renders the component automatically when state changes
- Import `useState` from `"react"` at the top always
- Use `const` for state variables
