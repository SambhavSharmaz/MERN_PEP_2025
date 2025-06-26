
import { useState } from "react"
const App2 = () => {
    const [monitor, remote] = useState(() =>{
    let val = localStorage.getItem("counter-item");
        if (val) {
            return parseInt[val];
        }
        else {
            return 0;
        }
});
    const handleincrement = () => {
        remote((prev)=>{
            localStorage.setItem("counter-item", prev + 1);
            return prev + 1;
        })
    }
    const handledecrement = () => {
        remote((prev)=>{
            localStorage.setItem("counter-item", prev - 1);
            return prev - 1;
        })
    }
    const handlereset = () => {
        remote(0);
        localStorage.setItem("counter-item", 0);
    }
    return (
        <div>
            <button onClick={handleincrement}>Increment</button>
            <button onClick={handledecrement}>Decrement</button>
            <button onClick={handlereset}>Reset</button>
            <h1>{monitor}</h1>
        </div>
    )
}

export default App2;