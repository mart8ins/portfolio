import React, { useState, useContext, useEffect } from "react";
import { tech } from "../../../content-text/learnedTech";
import "./learnedTech.css";
import { AppContext } from "../../../context/AppContext";

const LearnedTech = () => {
    const { eng } = useContext(AppContext);
    const lang = eng ? "eng" : "lv";

    const [techStackNames, setTechStackNames] = useState([]);
    const [activeStackName, setActiveStackName] = useState();

    useEffect(() => {
        const titles = [];
        tech.stack.forEach((item, i) => {
            titles.push({
                name: item.name,
                index: i,
            });
        });
        setTechStackNames(titles);
        setActiveStackName(titles[0]);
    }, []);

    const navigateStackNamesForward = () => {
        let ind = activeStackName.index < techStackNames.length - 1;
        if (ind) {
            setActiveStackName(techStackNames[activeStackName.index + 1]);
        }
    };
    const navigateStackNamesBackward = () => {
        let ind = activeStackName.index !== 0;
        if (ind) {
            setActiveStackName(techStackNames[activeStackName.index - 1]);
        }
    };

    return (
        <div className="tech__container">
            <div className="tech__title">{tech.title[lang]}</div>

            <div className="tech__navigate">
                <button
                    className={`nav__btn back ${activeStackName && activeStackName.index === 0 && "nav__btn__disable"}`}
                    onClick={navigateStackNamesBackward}>
                    Back
                </button>
                <div className="active__tech__name">{activeStackName && activeStackName.name}</div>
                <button
                    className={`nav__btn next ${
                        activeStackName && activeStackName.index === techStackNames.length - 1 && "nav__btn__disable"
                    }`}
                    onClick={navigateStackNamesForward}>
                    Next
                </button>
            </div>

            <div className="tech__description">
                {activeStackName &&
                    tech.stack.map((item, i) => {
                        if (item.name === activeStackName.name) {
                            return (
                                <p className="tech__text" key={i}>
                                    {item[lang].text}
                                </p>
                            );
                        } else {
                            return;
                        }
                    })}

                {activeStackName &&
                    tech.stack.map((item) => {
                        if (item.name === activeStackName.name && item.frameworks.length) {
                            return item.frameworks.map((it, i) => {
                                return (
                                    <div key={i} className="tech__frameworks">
                                        <h4>
                                            Framework <span>{it.name}</span>
                                        </h4>
                                        <p>{it[lang]}</p>
                                    </div>
                                );
                            });
                        } else {
                            return;
                        }
                    })}
            </div>
        </div>
    );
};

export default LearnedTech;
