import React, { useContext } from "react";
import "./experience.css";
import { exp } from "../../../../content-text/aboutExpEdu";
import { AppContext } from "../../../../context/AppContext";

const Experience = ({ data }) => {
    const { eng } = useContext(AppContext);
    console.log(data.data);
    return (
        <div className="exp__container">
            {data &&
                data.type === "work" &&
                data.data.map((item) => {
                    return (
                        <div className="__data">
                            <div className="top__">{eng ? item.eng.to : item.lv.to}</div>
                            <div className="mid__top">{eng ? item.eng.profession : item.lv.profession}</div>
                            <div className="mid__bottom">{eng ? item.eng.company : item.lv.company}</div>
                            <div className="bottom__">{eng ? item.eng.from : item.lv.from}</div>
                        </div>
                    );
                })}
            {data &&
                data.type === "education" &&
                data.data.map((item) => {
                    return (
                        <div className="__data">
                            <div className="top__">
                                {eng
                                    ? `${item.eng.diploma.title} ${item.eng.diploma.year}`
                                    : `${item.lv.diploma.title} ${item.lv.diploma.year}`}
                            </div>
                            <div className="mid__top">{eng ? item.eng.education : item.lv.education}</div>
                            <div className="mid__bottom">{eng ? item.eng.school : item.lv.school}</div>
                            {/* <div className="bottom__">{eng ? item.eng.from : item.lv.from}</div> */}
                        </div>
                    );
                })}
        </div>
    );
};

export default Experience;
