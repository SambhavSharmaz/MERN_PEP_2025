import { useEffect, useRef, useState } from "react";

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
        <div className="container">
            <h2 className="timer">{hours}:{minutes}:{seconds}</h2>
            {isTimerRunning ? <button onClick={handlePause}>PAUSE</button> : <button onClick={handlePlay}>PLAY</button>}
            <button onClick={handlereset}>RESET</button>
            <button onClick={handlelap}>LAP</button>
        </div>
    );
};

export default App1;