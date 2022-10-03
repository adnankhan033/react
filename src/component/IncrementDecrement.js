import React, { useEffect, useState } from 'react'

const IncrementDecrement = () => {
const [inVal, setValue] = useState(0);
const [color, setColor] = useState('black');

const inc =()=>{
    setValue(inVal+1);
    document.title =`${inVal}`;
    setColor("green");
}

const decrement =()=>{
    if(inVal===0){
        setValue(0);
        
    }else{
        setValue(inVal-1);
        document.title =`${inVal}`;
        setColor("red");
    }
   
}
const clear =()=>{
    setValue(0);
    document.title =`${inVal}`;
    setColor("blue");    
}
useEffect(()=>{
    document.title =`${inVal}`;
},[inVal])


  return (
    <div className='wrapper'>
<button className='plus left' onClick={inc}>+</button>
<p className='value left' style={{color:color}}>{inVal}</p>
<button className='minus left' onClick={decrement}>-</button><br />
{/* <button className='minus left' onClick={(e)=>(clear(e))}>clear</button> */}
<button className='minus left' onClick={clear}>clear</button>

    </div>
  )
}

export default IncrementDecrement