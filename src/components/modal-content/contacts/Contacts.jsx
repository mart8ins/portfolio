import React, { useContext } from "react";
import "./contacts.css";
import { AppContext } from "../../../context/AppContext";
import { contacts } from "../../../content-text/contacts";

const Contacts = () => {
    const { eng } = useContext(AppContext);
    return (
        <div className="contacts">
            <div className="cv__profile__me__data">
                {/* <img src="/images/profile.jpg" alt="Martins Meisters" /> */}
                <p>{eng ? contacts.eng.name : contacts.lv.name}</p>
                <p>{eng ? contacts.eng.email : contacts.lv.email}</p>
                <p>{eng ? contacts.eng.phone : contacts.lv.phone}</p>
                <p>{eng ? `${contacts.eng.country}, ${contacts.eng.city}` : `${contacts.lv.country}, ${contacts.lv.city}`}</p>

                <div className="my__github__icon">
                    <a href="https://github.com/mart8ins" target="_blank" rel="noreferrer">
                        <i className="fab fa-github-square"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
