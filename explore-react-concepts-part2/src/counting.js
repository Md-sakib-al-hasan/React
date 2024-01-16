import { useState } from "react"

export default function Counting(){
    const [count,setCount] = useState(0)
    const handeladd = () =>{
        setCount(count+1)
    }
    const handelReduce = () =>{
        setCount(count-1)
    }
    return(
        <div style={{border:'2px solid yellow'}}>
            <h3>Counter : {count}</h3>
            <button onClick={handeladd}>Add</button>
            <button onClick={handelReduce}>Reduce</button>
        </div>
        
    )
}