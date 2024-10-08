import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const TimerComponent = () =>{
    const [seconds,setSeconds] = useState(0);
    useEffect(() => {
      const intervalId = setInterval(()=>{
        console.log("setINterval exexcuted")
        setSeconds(prevSecond=>prevSecond+1);
      },1000);
    
      return () => {
    console.log("Time to Stop");
    clearInterval(intervalId);
      }
    }, [])
    
  return (
    <div>
        <h1>Seconds:{seconds}</h1></div>
  )
}

export default TimerComponent