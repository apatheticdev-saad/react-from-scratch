# Props in React

## What are Props?

Props (short for properties) are how you pass data from a **parent component to a child component**.

Think of a component like a function — props are its arguments. Same component, different data passed = different output.
---

## Passing Props

In the parent component, pass data like HTML attributes:

```jsx
<Welcome name="Saad" age={19} city="Hyderabad" />
```

- String values use quotes — `name="Saad"`
- Numbers, booleans, variables use `{}` — `age={19}`

---

## Receiving Props — Basic Way

```jsx
function Welcome(props) {
    return (
        <>
            <h2>Welcome, {props.name}!</h2>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>
        </>
    )
}

export default Welcome
```

Everything passed from parent comes inside the `props` object.

---

## Receiving Props — Cleaner Way (Destructuring)

Instead of writing `props.name`, `props.age` every time, destructure directly:

```jsx
function Welcome({ name, age, city }) {
    return (
        <>
            <h2>Welcome, {name}!</h2>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </>
    )
}

export default Welcome
```

Same result — just cleaner and less repetitive. This is the preferred way.

---

## Using the Component Multiple Times

```jsx
import Welcome from "./Welcome"

function App() {
    return (
        <>
            <Welcome name="Saad" age={19} city="Hyderabad" />
            <Welcome name="Ali" age={21} city="Lahore" />
            <Welcome name="Zara" age={20} city="Karachi" />
        </>
    )
}

export default App
```

Same component used 3 times with different data — each shows different output.

---

## Important Rule — Props are Read Only

You can never modify props inside the child component.

```jsx
// ❌ Wrong — never do this
function Welcome({ name }) {
    name = "Someone else" // not allowed
    return <h2>{name}</h2>
}
```

Props flow **one way** — from parent to child only. If you need to change data, that's where State comes in.

---

## Key Takeaways

- Props pass data from parent → child
- Passed like HTML attributes on the component tag
- Strings use quotes, everything else uses `{}`
- Always destructure props — cleaner and more readable
- Props are read only — never modify them
- Same component + different props = reusable UI
