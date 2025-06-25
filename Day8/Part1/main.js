import React from "react"
import ReactDOM from "react-dom/client"

const domRoot = document.getElementById("root")
const reactRoot = ReactDOM.createRoot(domRoot)

// const App = () => {
//     const [name, setName] = React.useState("")

//     const handleNameChange = (event) => {
//         setName(event.target.value)
//     }

//     const handleNameSubmit = (event) => {
//         event.preventDefault()
//         console.log("Name submitted: ", name)
//     }

//     return (
//         <div>
//             <h1>Form</h1>
//             <form onSubmit={handleNameSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={name} onChange={handleNameChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>
//     )
// }

const App = () =>{
    console.log("Sambhav's App Component")
    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

reactRoot.render(<App />) // React.createElement(App)