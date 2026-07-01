# React Interview Preparation

This folder contains React interview questions and resources.
React interview:

1.optimisation techniques
2. Tree shaking
3. Pure and impure
4. Create custom hooks
5. Context provider
6. Coutdown timer using react
7. Difference between React.memo and memoization
8. Using loader for different microfrontends in react
9. useEffect
10. Create login Page using react
11. Redux
12. Reusable Components
13. createCustomHook for fetching data in react
14. Implement component title
15. Adding to a todo list on clicking button in react
16. fetch data and display using table
17. Build tools for frontend
18. Difference between em and rem
19. Flex box uses?
20. First content paint
21. Performance related tools

Answers:

10. LoginPage

 
function logIn()
  {
    if(name && password)
    {
     setLogin(true)
    }
  }

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Login!</h1>
      <div style={styles.login }>
        <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <div>
          <button onClick={() => logIn()}>
          Submit
        </button>
        {login && "Submitted"}
        </div>
      </div>
    </div>
  )

  15. 
  import React, { useEffect, useState } from 'react';
  import './style.css';

  export default function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        console.log(json), setData(json);
      });
  }, []);

  return (
    <div>
      <h1>Check Posts!!</h1>
      <table style={{ background: 'green', border: '1px solid black' }}>
        <thead style={{ background: 'blue' }}>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody style={{ background: 'pink' }}>
          {data
            ? data.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}



// My questions
1.  What are design patterns in react.js/next.js?

a. Container-Presentational Design patterns

 Container–Presentational Components Separates business logic from UI rendering.

Container Components handle data fetching, state, and logic.

Presentational Components focus solely on displaying UI based on props.

// Container
const UserContainer = () => {
const [users, setUsers] = React.useState([]);
React.useEffect(() => {
fetch("/api/users").then(res => res.json()).then(setUsers);
}, []);
return <UserList users={users} />;
};

// Presentational
const UserList = ({ users }) => (
<ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
);


b. Controlled and uncontrolled components

A controlled component is a form element whose value and behavior are fully managed by React state. This means that the component's state is the single source of truth, and any user input updates the state through event handlers like onChange. 

function ControlledInput() {
const [value, setValue] = React.useState('');
return (
<input type="text" value={value} onChange={e => setValue(e.target.value)} />
);
}

An uncontrolled component is a form element that maintains its own internal state, similar to traditional HTML forms. React does not directly manage the value; instead, you access it using refs.Like -onFocus

function UncontrolledInput() {
const inputRef = React.useRef();
const handleSubmit = () => alert(inputRef.current.value);
return <input type="text" ref={inputRef} />;
}






