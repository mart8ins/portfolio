import React, { useContext } from "react";
import "./modalCloseBtn.css";
import { AppContext } from "../../../context/AppContext";

const ModalCloseBtn = () => {
    const { setModalSettings } = useContext(AppContext);

    return (
        <div className="modalCloseBtn">
            <button onClick={() => setModalSettings({ open: false, type: undefined })}>Close</button>
        </div>
    );
};

export default ModalCloseBtn;
