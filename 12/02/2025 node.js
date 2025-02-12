import { useState } from "react";

import childA from "./childA"
import childB from "./childB"

const Parent =()=> {
  const[count, setCount]=useState(0);
  const increment =()=>{
    setCount(c=>c+1);
  };
  return(
    <div>
      <childA/>
      <childB count={count} increment={increment}/>
    </div>
  )
};
export default Parent;
child A
const childA=()=>{
    console.log("child A is rendered")
    return <h2> this is childA</h2>

};
export default childA;
child B
        const childB=({count,increment})=>{
    console.log("child B rendered")
    return(
        <div>
           <h1>Count:{count}</h1>
           <button onClick={increment}>increment</button>
        </div>
    )

}
export default childB;
