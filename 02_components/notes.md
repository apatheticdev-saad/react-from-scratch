# Components in React

## What is a Component?

A component is just a JavaScript function that returns JSX (HTML-like code). It is the building block of any React app. Instead of writing everything in one file, React breaks the UI into small independent pieces called components.

Think of it like LEGO — each brick is a component, and you combine them to build a full UI.

---
## Creating a Component

```jsx
function Welcome() {
    return <h2>Welcome to my React app!</h2>
}

export default Welcome
```

- Function name must always be **PascalCase** (first letter capital)
- It must **return** some JSX
- `export default` makes it available for other files to import

---
## Using a Component Inside Another Component

```jsx
import Welcome from "./Welcome"

function App() {
    return (
        <>
            <h1>Hello</h1>
            <Welcome />
        </>
    )
}

export default App
```

- Use `import` to bring the component in
- Use it like an HTML tag — `<Welcome />`
- Self closing tag with `/>`

---

## Component Tree

A real app is just components inside components:

```
App
├── Navbar
├── Hero
├── Cards
│   ├── Card
│   ├── Card
│   └── Card
└── Footer
```

---

## JSX Rules

### 1. Only one parent element allowed
```jsx
// ❌ Wrong — two elements side by side
return (
    <h1>Hello</h1>
    <p>World</p>
)

// ✅ Correct — wrapped in one parent
return (
    <div>
        <h1>Hello</h1>
        <p>World</p>
    </div>
)
```

### 2. Use Fragment to avoid extra div
```jsx
return (
    <>
        <h1>Hello</h1>
        <p>World</p>
    </>
)
```
`<>` and `</>` are Fragment — acts as wrapper but adds no extra HTML element.

### 3. `class` becomes `className`
```jsx
<h1 className="title">Hello</h1>
```

### 4. Every tag must be self closed
```jsx
<input type="text" />
<br />
<img src="photo.jpg" />
```

### 5. JavaScript inside JSX uses `{}`
```jsx
const name = "Saad"
return <h1>Hello {name}</h1>
```

Anything inside `{}` is treated as JavaScript — variables, expressions, calculations, ternary operators all work.

---

## Key Takeaways

- A component = a function that returns JSX
- Always PascalCase for component names
- Always `export default` at the bottom
- Always `import` before using in another file
- One parent element rule — use Fragment `<></>` to avoid extra divs
- `{}` to embed JavaScript inside JSX
