import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [eng, setEng] = useState(true);
    const [smallBrowserWindow, setSmallBrowserWindow] = useState(false);
    const [modalSettings, setModalSettings] = useState({
        open: false,
        type: undefined,
    });
    const [modalCustomStyle, setModalCustomStyle] = useState({});

    useEffect(() => {
        if (modalSettings.type === "motivation") {
            setModalCustomStyle({});
        }
        if (modalSettings.type === "contacts") {
            setModalCustomStyle({
                backgroundColor: "#282c34",
                width: `${smallBrowserWindow ? "75%" : window.innerWidth < 786 ? "75%" : "22%"}`,
                height: "360px",
                margin: "120px auto",
            });
        }
        if (modalSettings.type === "aboutExpEdu") {
            setModalCustomStyle({});
        }
        if (modalSettings.type === "learnedTech") {
            setModalCustomStyle({ backgroundColor: "#282c34" });
        }
        if (modalSettings.type === "projects") {
            setModalCustomStyle({});
        }
    }, [modalSettings, smallBrowserWindow]);

    const updateScreenSize = () => {
        if (window.innerWidth < 786) {
            setSmallBrowserWindow(true);
        } else {
            setSmallBrowserWindow(false);
        }
    };
    // window.addEventListener("resize", updateScreenSize);

    return <AppContext.Provider value={{ eng, setEng, modalSettings, setModalSettings, modalCustomStyle }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
