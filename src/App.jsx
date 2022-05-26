import { Routes, Route } from "react-router-dom";
import "./App.css";
import Countdown from "./components/countdown/Countdown";
import Landing from "./components/landing/Landing";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
// https://fontawesome.com/docs/web/use-with/react/add-icons
// https://fontawesome.com/v6/icons/square-arrow-left?s=solid

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Countdown />} />
                <Route path="/home" element={<Landing />} />
            </Routes>
        </div>
    );
}

export default App;
