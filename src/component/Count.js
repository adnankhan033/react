import React, { useEffect, useState } from 'react'

const Count = () => {
const[count, setValue] = useState(0);

useEffect(()=>{

if(count>=1){
        document.title = `Chat ${count}`;
}else{
    document.title = `Chat`;
}
},[count])


useEffect(()=>{
console.log("second useeffect run")
    },[])


// const countValue =()=>{
//     setValue(count+1);
//     if(count >=1){
//         document.title = `Chat ${count}`;
//     }else{
//         document.title = `Chat`;

//     }
// }
  return (
    
    <>
    <p>{count}</p>
    {/* <button onClick={countValue}>Click me...</button> */}
    <button onClick={()=>setValue(count+1)}>Click me...</button>
    </>
  )
}

export default Count