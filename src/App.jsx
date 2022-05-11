import {useState, useRef, useEffect} from "react"
import "./App.css";
import Countdown from "./components/countdown/Countdown";
import Landing from "./components/landing/Landing";

function App() {
    const [showCountdown,setShowCountdown] = useState(true);

    console.log("app")
    return (
        <div className="App">
            {
                showCountdown ? <Countdown setShowCountdown={setShowCountdown}/> : <Landing/>
            }
        </div>
    );
}

export default App;
