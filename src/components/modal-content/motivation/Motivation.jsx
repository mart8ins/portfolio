import React, { useContext } from "react";
import "./motivation.css";
import { AppContext } from "../../../context/AppContext";
import { motivation, goals } from "../../../content-text/motivation";

const Motivation = () => {
    const { eng } = useContext(AppContext);
    return (
        <div className="motivation__container">
            <div className="motivation">
                <h3>{eng ? motivation.eng.title : motivation.lv.title}</h3>
                <p>{eng ? motivation.eng.text : motivation.lv.text}</p>
            </div>
            <div className="goals">
                <h3>{eng ? goals.eng.title : goals.lv.title}</h3>
                <p>{eng ? goals.eng.text : goals.lv.text}</p>
            </div>
        </div>
    );
};

export default Motivation;
