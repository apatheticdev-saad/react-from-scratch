# useEffect in React

## What is useEffect?
Lets you run code **after the component appears on screen.**
Used for — API calls, timers, connecting to services.


## Basic Syntax
```jsx
useEffect(() => {
    // code to run
}, [])
```

## Dependency Array — The `[]` Part
| Syntax | When it runs |
|--------|-------------|
| `[]` | Once on page load only |
| `[value]` | Every time that value changes |
| nothing | Every single render — avoid this |

## useEffect + fetch
```jsx
useEffect(() => {
    fetch("url")
        .then(res => res.json())
        .then(data => {
            setState(data.value)
        })
}, [])
```

## Loading State Pattern
```jsx
const [loading, setLoading] = useState(true)

// inside fetch after data arrives
setLoading(false)

// in JSX
{loading ? <p>Loading...</p> : <p>{data}</p>}
```

## Key Takeaways
- useEffect runs **after** render, not before
- Always pass `[]` unless you have a reason not to
- fetch inside useEffect = data loads automatically on page open
- Use a loading state to handle the delay before data arrives


## Extra
also can add button to change joke, by remove logic from useState to newly created function
same js logic needed to be applied, but keep focus on which function need to be where
Now lets move to next topic 