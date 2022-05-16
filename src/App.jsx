import { Routes, Route } from "react-router-dom";
import "./App.css";
import Countdown from "./components/countdown/Countdown";
import Landing from "./components/landing/Landing";

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
