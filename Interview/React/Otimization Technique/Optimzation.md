1. REACT.MEMO:

React.memo is a higher-order component that helps you skip unnecessary re-renders of functional components when their props remain unchanged. It’s primarily a performance optimization tool and should not be used to fix incorrect rendering logic.

Basic Usage When you wrap a component with memo, React will compare its previous and next props using shallow equality (Object.is). If they are the same, React reuses the last rendered output instead of re-rendering.

import React from 'react';
import { useState } from 'react'
import { memo } from 'react';


const Greeting = memo(function Greeting({ name }) {
console.log("Greeting rendered");
return <h3>Hello{name && `, ${name}`}!</h3>;
});

function App() {
  const [name, setName] = React.useState('');
 const [address, setAddress] = React.useState('');
 return (
   <>
     <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
     <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" />
     <Greeting name={name} />
   </>
 );
}

export default App

Here, Greeting only re-renders when name changes, not when address changes.

2. USE CALLBACK

const Greeting = memo(function Greeting({ onClick }) {
console.log("Greeting rendered");
return <button onClick={onClick}>Hello{name && `, ${name}`}!</button>;
});

function App() {
  const [name, setName] = React.useState('');
 const [address, setAddress] = React.useState('');
 const handleClick=useCallback(()=>{console.log("handle clicked")},[])
 
 
 return (
   <>
     <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
     <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" />
     <Greeting name="Aru" onClick={handleClick} />
      // USING INLINE FUNC REDUCES REACT.MEMO EFFECT 
   </>
 );
}

export default App

3. USE MEMO 

The useMemo hook in React is a powerful tool designed to optimize performance by memoizing expensive computations. It allows React to store the result of a function call and reuse it when the dependencies of that function haven't changed, rather than recalculating the value on every render.


import React, { useState, useEffect } from 'react';

 const Parent = () => {
     const [data, setData] = useState([1, 2, 3]);
     const [count, setCount] = useState(0);

     // expensive calculation (e.g., sorting data)
     const calculatedData = useMemo()=> data.sort((a, b) => a - b);

     useEffect(() => {
         console.log('Parent re-rendered');
     }, [data]);

     return (
         <div>
             <button onClick={() => setCount(count + 1)}>Increment Count</button>
             <Child calculatedData={calculatedData} />
         </div>
     );
 };

 const Child = React.memo(({ calculatedData }) => {
     console.log('Child re-rendered');
     return (
         <ul>
             {calculatedData.map((num, idx) => (
                 <li key={idx}>{num}</li>
             ))}
         </ul>
     );
 });

 4. DEBOUNCING

 Debouncing ensures that a function is only called after a specific delay has passed since the last time the event was triggered. In other words, it postpones the function execution until the user action (like typing or scrolling) has settled down. This is particularly useful for input fields where you only want to take action (e.g., make an API call) after the user stops typing, rather than every single keystroke.

 5. THROTTLING

 Throttling ensures that a function is called at most once during a specified time interval, no matter how many times the event is triggered. Unlike debouncing, which waits until the action stops, throttling ensures that the function is executed at regular intervals while the action is still happening.


