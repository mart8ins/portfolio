import React, { useContext } from "react";
import "./modalCloseBtn.css";
import { AppContext } from "../../../context/AppContext";

const ModalCloseBtn = () => {
    const { setModalSettings, eng } = useContext(AppContext);

    return (
        <div className="modalCloseBtn">
            <button onClick={() => setModalSettings({ open: false, type: undefined })}>{eng ? "Close" : "Aizvērt"}</button>
        </div>
    );
};

export default ModalCloseBtn;
