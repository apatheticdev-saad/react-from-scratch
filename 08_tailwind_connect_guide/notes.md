# useRef in React

## What is useRef?
Like `document.getElementById` in plain JS — grabs an HTML element 
directly in React. Also stores values without causing re-render.

## Syntax
```jsx
const myRef = useRef(null)
```
Attach to element:
```jsx
<input ref={myRef} />
```
Access it:
```jsx
myRef.current  // this is the actual element
```

## Common Uses
- Focus an input — `myRef.current.focus()`
- Change styles — `myRef.current.style.backgroundColor = "red"`
- Store a value without re-rendering

## useState vs useRef
| | useState | useRef |
|---|---|---|
| Stores value | ✅ | ✅ |
| Re-renders on change | ✅ | ❌ |
| Access DOM elements | ❌ | ✅ |

## Key Takeaway
- Use `useState` when change should update the screen
- Use `useRef` when you need to grab an element or track 
something behind the scenes without touching the UI