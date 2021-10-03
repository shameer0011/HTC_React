import React, { useState } from "react";


const Counter1=()=>{
    const [count, setCount] = useState(0);

   const changeHandler=()=>{
        setCount(count+1)

    }
    const decesHandler=()=>{
        setCount(count-1)
    }
    const doublehandler=()=>{
        setCount(count*2)
    }
    const Divisonhandler=()=>{
        setCount(count/2)
    }

    return(
        <div>
            <h2>Function Based Component...!!</h2>
            <h4>{count}</h4>
            <input type="submit" onClick={changeHandler} value="+" ></input>
            <input type="submit" onClick={decesHandler} value="-" ></input>
            <input type="submit" onClick={doublehandler} value="*" ></input>
            <input type="submit" onClick={Divisonhandler} value="/" ></input>



        </div>

    );
}
export default Counter1;