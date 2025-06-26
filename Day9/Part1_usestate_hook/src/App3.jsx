// React has one way data bending, while using onchange allows for two way data binding
import { useState } from "react"
const App3 = () => {
    const [searchtxt, settxt] = useState(()=>{
        let val =localStorage.getItem("counter-item")
        if(val){
            return val;
        }
        else{
            localStorage.setItem("counter-item", "arun");
        }
    });
    console.log(searchtxt)
    const handlesearch = (e) => {
        const value = e.target.value;
        localStorage.setItem("counter-item", value);
        settxt(value);
    }

    return (
        <div>
            <input type="text" onChange={handlesearch} />
            <h1>{searchtxt}</h1>
        </div>
    )
}

export default App3;