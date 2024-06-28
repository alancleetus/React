
# React Learning Repository

This repository contains various folders, each covering a different aspect of learning React. Below is a cheatsheet explaining the topics learned in each folder, along with brief explanations and example code.

[React Best Practices](https://github.com/airbnb/javascript/tree/master/react)

1. Create an app called "my-react-app"

```
npm create vite@latest my-react-app
```

2. Change directory

```
cd my-react-app
```

3. Install dependencies

```
npm install
```

4. Run app

```
npm run dev
```


# Summary

1. **[1-intro-to-jsx](./1-intro-to-jsx)**

   - **Topic**: Introduction to JSX
   - **Explanation**: Learning the basics of JSX, a syntax extension for JavaScript used in React.
   - **Example**:
     ```jsx
     const element = <h1>Hello, world!</h1>;
     ```

2. **[2-jsx-code-challenge](./2-jsx-code-challenge)**

   - **Topic**: JSX Code Challenge
   - **Explanation**: Practical exercises to reinforce JSX concepts.
   - **Example**:
     ```jsx
     const element = (
       <div>
         <h1>Hello, world!</h1>
         <p>Welcome to learning JSX</p>
       </div>
     );
     ```

3. **[3-javascript-expressions-in-jsx-practice](./3-javascript-expressions-in-jsx-practice)**

   - **Topic**: JavaScript Expressions in JSX
   - **Explanation**: Using JavaScript expressions inside JSX to make dynamic content.
   - **Example**:
     ```jsx
     const name = "John";
     const element = <h1>Hello, {name}</h1>;
     ```

4. **[4-jsx-attributes-and-styling](./4-jsx-attributes-and-styling)**

   - **Topic**: JSX Attributes and Styling
   - **Explanation**: Applying attributes and inline styles in JSX.
   - **Example**:
     ```jsx
     const element = <img src="logo.png" alt="Logo" />;
     const style = { color: "blue" };
     const styledElement = <h1 style={style}>Hello, world!</h1>;
     ```

5. **[5-inline-styling-in-jsx](./5-inline-styling-in-jsx)**

   - **Topic**: Inline Styling in JSX
   - **Explanation**: More practices on using inline styles within JSX elements.
   - **Example**:
     ```jsx
     const element = <h1 style={{ color: "blue" }}>Hello, world!</h1>;
     ```

6. **[6-react-styling-practice](./6-react-styling-practice)**

   - **Topic**: React Styling Practice
   - **Explanation**: Additional exercises to practice styling in React.
   - **Example**:
     ```jsx
     const element = (
       <button style={{ backgroundColor: "blue", color: "white" }}>
         Click Me
       </button>
     );
     ```

7. **[7-react-components](./7-react-components)**

   - **Topic**: React Components
   - **Explanation**: Creating and using React components.
   - **Example**:
     ```jsx
     function Welcome(props) {
       return <h1>Hello, {props.name}</h1>;
     }
     ```

8. **[8-react-components-practice](./8-react-components-practice)**

   - **Topic**: React Components Practice
   - **Explanation**: Exercises to build and utilize React components.
   - **Example**:
     ```jsx
     function App() {
       return <Welcome name="Sara" />;
     }
     ```

9. **[9-es6-import-export-and-modules](./9-es6-import-export-and-modules)**

   - **Topic**: ES6 Import/Export and Modules
   - **Explanation**: Using ES6 modules to import and export components.
   - **Example**:

     ```jsx
     // In file 'App.js'
     export function App() {
       return <h1>Hello, world!</h1>;
     }

     // In another file
     import { App } from "./App";
     ```

10. **[10-es6-import-export-practice](./10-es6-import-export-practice)**

    - **Topic**: ES6 Import/Export Practice
    - **Explanation**: Practice exercises for ES6 import/export syntax.
    - **Example**:

      ```jsx
      // In file 'utils.js'
      export const PI = 3.14;

      // In another file
      import { PI } from "./utils";
      ```

11. **[11-react-props](./11-react-props)**

    - **Topic**: React Props
    - **Explanation**: Understanding and using props in React components.
    - **Example**:
      ```jsx
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      ```

12. **[12-es6-array-helpers](./12-es6-array-helpers)**

    - **Topic**: ES6 Array Helpers
    - **Explanation**: Utilizing array helper methods like `map`, `filter`, and `reduce`.
    - **Example**:
      ```jsx
      const numbers = [1, 2, 3];
      const doubled = numbers.map((number) => number * 2);
      ```

13. **[13-mapping-components-practice](./13-mapping-components-practice)**

    - **Topic**: Mapping Components Practice
    - **Explanation**: Practicing mapping over arrays to render multiple components.
    - **Example**:
      ```jsx
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) => (
        <li key={number.toString()}>{number}</li>
      ));
      ```

14. **[14-conditional-rendering-practice](./14-conditional-rendering-practice)**

    - **Topic**: Conditional Rendering Practice
    - **Explanation**: Implementing conditional rendering in React.
    - **Example**:
      ```jsx
      function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
          return <h1>Welcome back!</h1>;
        }
        return <h1>Please sign up.</h1>;
      }
      ```

15. **[15-useState-hook](./15-useState-hook)**

    - **Topic**: useState Hook
    - **Explanation**: Introduction to the `useState` hook for managing state in functional components.
    - **Example**:

      ```jsx
      import { useState } from "react";

      function Counter() {
        const [count, setCount] = useState(0);
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
          </div>
        );
      }
      ```

16. **[16-useState-hook-practice](./16-useState-hook-practice)**

    - **Topic**: useState Hook Practice
    - **Explanation**: Exercises for practicing state management with `useState`.
    - **Example**:
      ```jsx
      function Toggle() {
        const [isOn, setIsOn] = useState(false);
        return (
          <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
        );
      }
      ```

17. **[17-es6-destructuring](./17-es6-destructuring)**
    - **Topic**: ES6 Destructuring
    - **Explanation**: Using destructuring assignment for objects and arrays.
    - **Example**:
      ```jsx
      const person = { name: "John", age: 30 };
      const { name, age } = person;
      ```
18.  **[18-react-forms](./18-react-forms)** 
    - **Topic**: React Forms
    - **Explanation**: Understanding how to handle forms in React, including controlled components and form submission.
    - **Example**:
      ```jsx
      
      function MyForm() {
        const [name, setName] = useState("");
        const handleChange = (event) => {
          setName(event.target.value);
        };
        const handleSubmit = (event) => {
          event.preventDefault();
          alert("A name was submitted: " + name);
        };
        return (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }

      
      ```

