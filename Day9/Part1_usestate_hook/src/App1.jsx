
import { useState } from "react"
const App1 = () => {
    const [monitor, remote] = useState(0);
    console.log(monitor);
    const handleclick = () => {
        //out of all these values that one that will be executed first will be the latest value according to the state 
        // of its position which in this case is 1 at 3rd
        // remote(monitor+1);
        // remote(monitor+2);
        // remote(monitor+1);
        // console.log(monitor);

        remote((prev) => {
            return prev + 1;
        });
        remote((prev) =>{ 
            return prev + 1;
        });
        console.log(monitor);
    }

    return (
        <div>
            <button onClick={handleclick} style=
            {{ backgroundColor: "Black",
                color: "white", padding: "10px", 
                borderRadius: "5px", textAlign: "center", 
                alignItems: "center" }}
                >You have clicked Me {monitor} times...
            </button>
        </div>
    )
}

export default App1;