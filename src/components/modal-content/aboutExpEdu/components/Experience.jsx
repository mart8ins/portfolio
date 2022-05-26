import React, { useState, useContext } from "react";
import "./experience.css";
import { AppContext } from "../../../../context/AppContext";
import Work from "./Work";
import Education from "./Education";

const Experience = ({ data }) => {
    const { eng } = useContext(AppContext);

    const [top, setTop] = useState(-1);
    const [center, setCenter] = useState(0);
    const [bottom, setBottom] = useState(1);

    const previousExp = () => {
        if (top > -1) {
            setTop(top - 1);
            setCenter(center - 1);
            setBottom(bottom - 1);
        }
    };
    const nextExp = () => {
        if (bottom !== data.data.length) {
            setTop(top + 1);
            setCenter(center + 1);
            setBottom(bottom + 1);
        }
    };

    return (
        <div className="exp__container">
            {data && data.type !== "education" && top === -1 && (
                <div className={`__data non__active__background`}>
                    <div className="card__on__top__none"></div>
                </div>
            )}

            {data.type === "work" && (
                <Work eng={eng} data={data} top={top} center={center} bottom={bottom} previousExp={previousExp} nextExp={nextExp} />
            )}

            {data.type === "education" && <Education eng={eng} data={data} top={top} center={center} bottom={bottom} />}

            {data && data.type !== "education" && data.data.length === bottom && (
                <div className={`__data non__active__background`}>
                    <div className="card__on__top__none"></div>
                </div>
            )}
        </div>
    );
};

export default Experience;
