import React, { useContext } from "react";
import "./aboutExpEdu.css";
import { exp } from "../../../content-text/aboutExpEdu";
import Experience from "./components/Experience";
import { AppContext } from "../../../context/AppContext";

const AboutExpEdu = () => {
    const { eng } = useContext(AppContext);

    return (
        <div className="eduExp__container">
            <div className="eduExp__title">{eng ? "Work experience" : "Darba pieredze"}</div>
            <div className="work">
                <Experience data={{ type: "work", data: exp.work }} />
            </div>

            <div className="eduExp__title">{eng ? "Education" : "Izglītība"}</div>
            <div className="education">
                <Experience data={{ type: "education", data: exp.education }} />
            </div>
        </div>
    );
};

export default AboutExpEdu;
