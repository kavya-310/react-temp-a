import { useState } from "react";
export default function App2(){
    const [count,setcount]=useState(0);
    const increment=() =>
    {
        setcount(count+1)
    }
    const decrement=() =>
        {
            setcount(count-1)
        }
    return (
        <div>
            <h3> This is App2</h3>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
        </div>
    );
}