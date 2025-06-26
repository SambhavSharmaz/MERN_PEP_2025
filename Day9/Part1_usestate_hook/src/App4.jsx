import { useState } from "react"
const App4 = () => {
    const [arr, setarr] = useState(["Kiwi","Banana"]);
    // console.log(setarr)
    const handlefruit = () => {
        const temp = [...arr];
        // arr.push("Mango");
        temp.push("Mango");
        console.log(arr);
        // Method1:
        // setarr([...arr]);
        // Method2:
        setarr(temp);
    }
    return (
        <div>
            <h1>Below is a list of fruits: </h1>
            <ul>{arr.map((elem)=>{
                return <li>{elem}</li>
            })}</ul>
            <button onClick={handlefruit}>Add Mango</button>
        </div>
    )
}

export default App4;