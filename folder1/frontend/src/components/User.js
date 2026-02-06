import React from 'react';
import {useState} from 'react';
const User = ({name})=>{
     const [count, setCount] = useState(0);
    return <div className="user-card">
        <h1>Name : {name}</h1>
        <h3>Location : Jalandhar</h3>
        <h4>Contact : @Shark77su</h4>
        <h4>Count : {count}</h4>
        <button onClick={() => setCount(count + 1)}>Like</button>
    </div>
}
export default User;