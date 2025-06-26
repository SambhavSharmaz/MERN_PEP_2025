import "./SearchBox.css"
// const SearchBox = () => {

//     const handlesearch = (e) => {
//         console.log(e.target.value);
//         document.getElementById("search").innerHTML = e.target.value;
//         // alert("Button Clicked")   
//     }

//     return (
//         <div className="container">
//         <div className="search-box">
//             <input type="text" onKeyUp={handlesearch} placeholder="Find whatever you want..." />
//             <button>Search</button>
//         </div>
//         <p id="search" className="search"></p>
//         </div>
//     )
// }

// export {SearchBox};

import { useState } from "react";

const SearchBox = () => {
    const [monitor,remote] = useState();
    const handlesearch = (e) => {
        // searchText = e.target.value;
        // console.log(searchText);
        remote(e.target.value);
        console.log(monitor);
    };
    return (
        <div className="search-box">
            <input type="text" onKeyUp={handlesearch} placeholder="Find whatever you want..." />
        <p>{monitor}</p>
        </div>
    )
}

export {SearchBox};