import React, { useContext } from "react";
import Modal from "react-modal";
import { AppContext } from "../../context/AppContext";

import Motivation from "../modal-content/motivation/Motivation";
import LearnedTech from "../modal-content/learnedTech/LearnedTech";
import Projects from "../modal-content/projects/Projects";
import AboutExpEdu from "../modal-content/aboutExpEdu/AboutExpEdu";
import Contacts from "../modal-content/contacts/Contacts";
import ModalCloseBtn from "../modal-content/shared/ModalCloseBtn";

const ModalViews = () => {
    const { modalSettings, setModalSettings, modalCustomStyle } = useContext(AppContext);

    const handleCloseModal = () => {
        setModalSettings({
            open: false,
            type: undefined,
        });
    };

    const customStyles = {
        content: {
            boxShadow: "0 0 120px black",
            backgroundColor: "whitesmoke",
            bottom: "0px",
            top: "0px",
            left: "0px",
            right: "0px",
            ...modalCustomStyle,
        },
    };
    return (
        <div>
            <Modal isOpen={modalSettings.open} onRequestClose={handleCloseModal} ariaHideApp={false} style={customStyles}>
                <ModalCloseBtn />
                {modalSettings.type === "motivation" && <Motivation />}
                {modalSettings.type === "learnedTech" && <LearnedTech />}
                {modalSettings.type === "projects" && <Projects />}
                {modalSettings.type === "aboutExpEdu" && <AboutExpEdu />}
                {modalSettings.type === "contacts" && <Contacts />}
            </Modal>
        </div>
    );
};

export default ModalViews;
