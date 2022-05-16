import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [eng, setEng] = useState(true);
    const [modalSettings, setModalSettings] = useState({
        open: false,
        type: undefined,
    });

    return <AppContext.Provider value={{ eng, setEng, modalSettings, setModalSettings }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
