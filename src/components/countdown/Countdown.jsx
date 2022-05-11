import React, {useState, useEffect, useRef} from 'react'
import "./counter.css";

const Countdown = ({setShowCountdown}) => {
  const [count, setCount] = useState(5);
  let intervalRef = useRef();

  const decrease = () => {
    if(count !== 0) return setCount(count - 1);
    setShowCountdown(false);
  };
    
    useEffect(()=> {
      intervalRef.current = setInterval(decrease, 1000);
      return () => clearInterval(intervalRef.current);
    })

  return (
    <div className="countdown__container">
        <div className="countdown">
            <div className="number">{count !== 0 && count}</div>
                <div className="count">{count === 0 ? `${"Welcome!"}` : `${"Loading..."}`}</div>
            </div>
        <div className="border"></div>
      </div>
  )
}

export default Countdown