import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./counter.css";

const Countdown = () => {
    const [count, setCount] = useState(3);
    let intervalRef = useRef();
    const navigate = useNavigate();

    const decrease = () => {
        if (count !== 0) return setCount(count - 1);
        navigate("/home");
    };

    useEffect(() => {
        intervalRef.current = setInterval(decrease, 1000);
        return () => clearInterval(intervalRef.current);
    });

    return (
        <div className="countdown__container">
            <div className="countdown">
                <div className="number">{count !== 0 && count}</div>
                <div className="count">
                    {
                        count === 0 ? "Welcome!" : "Loading..."
                        // ||
                        //     (count === 1 && "One!") ||
                        //     (count === 2 && "Two!") ||
                        //     (count === 3 && "Three!") ||
                        //     (count === 4 && "Four!") ||
                        //     (count === 5 && "All together!")
                    }
                </div>
            </div>
            <div className="border"></div>
        </div>
    );
};

export default Countdown;
