import React, {useState, useEffect, useRef} from 'react'
import "./counter.css";

const Countdown = ({setShowCountdown}) => {
  const [count, setCount] = useState(5);

  let intervalRef = useRef();

  const decrease = () => {
    if(count !== 0) {
      setCount(count - 1);
    }
     else {
      setShowCountdown(false)
     }
  };
    
    useEffect(()=> {
      intervalRef.current = setInterval(decrease, 1000);
      return () => {
        clearInterval(intervalRef.current);
      } 
    })

    console.log("countdown")
  return (
    <div className="counter__container">{count === 0 ? `${"Welcome!"}` : `${"Loading... in " + count}`}</div>
  )
}

export default Countdown