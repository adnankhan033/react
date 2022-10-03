import React, { useEffect, useState } from 'react'
import './style.css';

const Api = () => {
const[user, setusers] = useState([]);
const getUsers = async ()=> {
   const response = await fetch('https://jsonplaceholder.typicode.com/photos')
   setusers(await response.json());
}
useEffect(()=>{
    getUsers();
},[])
  return (
    <>
        <div className="cards1">
        {
            user.map((el)=>{
            return(
              <div className="cardbody">
                <div className="card-left">
              <img src={el.thumbnailUrl} alt="horse" />
                </div>
                <div className="card-right">
                <div className="ctitle">{el.title}</div>
                <div className="desc">{el.id}</div>
              
                </div>
              </div>
          
            )
            })
        }
           
        </div>
    </>
  )
}

export default Api