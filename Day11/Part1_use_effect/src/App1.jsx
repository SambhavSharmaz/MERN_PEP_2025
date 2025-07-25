import { useEffect, useRef, useState } from "react";
import "./App.css"
const App1 = () => {
    const [timeInSec, setTimeInSec] = useState(0); // if you want value to be stored + rendered on the screen properly
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const intervalRef = useRef(null); // if you want value to be stored + but do not care about value on screen

    useEffect(() => {
        console.log("========= setting interval =====");

        intervalRef.current = setInterval(() => {
            setTimeInSec((prevTime) => {
                return prevTime + 1;
            });
        }, 1000);
    }, []);

    const handlePause = () => {
        const intervalId = intervalRef.current;
        clearInterval(intervalId);

        setIsTimerRunning(false);
    };

    const handlePlay = () => {
        if (!isTimerRunning) {
            intervalRef.current = setInterval(() => {
                setTimeInSec((prevTime) => {
                    return prevTime + 1;
                });
            }, 1000);

            setIsTimerRunning(true);
        }
    };

    const handlelap = () => {
        console.log("Lap: ",timeInSec);
    };

    const handlereset = () => {
      setTimeInSec(0);
    }

    const hours = Math.floor(timeInSec / 3600); 
    const minutes = Math.floor((timeInSec % 3600) / 60);
    const seconds = timeInSec % 60;

    return (
        <div className="timer-container">
            <h2 className="timer-count">{hours}:{minutes}:{seconds}</h2>
            {isTimerRunning ? <button className="timer-pause" onClick={handlePause}>PAUSE</button> : <button className="timer-play" onClick={handlePlay}>PLAY</button>}
            {isTimerRunning ? <button className="timer-reset" onClick={handlereset}>RESET</button> : <button className="timer-lap" onClick={handlelap}>LAP</button>}
        </div>
    );
};

export default App1;