import React, { useContext } from "react";
import "./landing.css";
import { AppContext } from "../../context/AppContext";
import { intro } from "../../content-text/intro";
import ModalViews from "./ModalViews";

const Landing = () => {
    const { eng, setEng, setModalSettings } = useContext(AppContext);
    const changeLang = () => setEng(!eng);

    const handleOpenModal = (type) => {
        setModalSettings({
            open: true,
            type: type,
        });
    };
    return (
        <div className="home">
            <ModalViews />

            <div className="language">
                <button className="language__btn" onClick={changeLang}>
                    {eng ? "LV" : "ENG"}
                </button>
            </div>

            <div className="intro">
                <img src="/images/profile.jpg" alt="Martins Meisters" />
                <p>{!eng ? intro.landingIntro.lv : intro.landingIntro.eng}</p>
            </div>

            <div className="buttons">
                <button className="openModalBtn" onClick={() => handleOpenModal("motivation")}>
                    {!eng ? intro.landingButtons.motivation.lv : intro.landingButtons.motivation.eng}
                </button>
                <button className="openModalBtn" onClick={() => handleOpenModal("learnedTech")}>
                    {" "}
                    {!eng ? intro.landingButtons.learnedTech.lv : intro.landingButtons.learnedTech.eng}
                </button>
                <button className="openModalBtn" onClick={() => handleOpenModal("projects")}>
                    {!eng ? intro.landingButtons.projects.lv : intro.landingButtons.projects.eng}
                </button>
                <button className="openModalBtn" onClick={() => handleOpenModal("aboutExpEdu")}>
                    {!eng ? intro.landingButtons.aboutExpEdu.lv : intro.landingButtons.aboutExpEdu.eng}
                </button>
                <button className="openModalBtn" onClick={() => handleOpenModal("contacts")}>
                    {!eng ? intro.landingButtons.contacts.lv : intro.landingButtons.contacts.eng}
                </button>
            </div>
        </div>
    );
};

export default Landing;
