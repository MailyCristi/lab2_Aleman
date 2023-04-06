import React from "react";
import { useState , useEffect} from "react";
const Counter = () =>{
    const [count, setCount] = useState(0);
    //funcion de incremento
    const increment=()=>{
        setCount(count+1)
    }
    //funcion de decremento
    const decrement=()=>{
        setCount(count-1)
    }
    //useEffect funcionalidades
    useEffect(() => {
        let timer = setTimeout(()=>{
            setCount((count)=>count+1)
        },1000);
        return () => clearTimeout(timer)
    });
    
    return <div>
        <h2>I have rendered {count} times!</h2>
        <button onClick={increment}>Incremento</button>
        <button onClick={decrement}>Decremento</button>
    </div>
}
export default Counter;