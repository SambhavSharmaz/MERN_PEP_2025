// function re-run ==> component re-render
// react re-render's componenet either on state change or props change

import { useState } from "react";

const App = () => {
  // let searchtext = "Aman";

  const [monitor,remote] = useState();
  
  const handlesearch = (e) => {
    const value = e.target.value;
    // searchtext = value;
    remote(value);
    console.log(monitor);
  }

  // const gethobbies = () => {
  //   const arr = ["cricket", "football"]
  //   return arr;
  // }

  // const res = gethobbies();

  // const [hob1, hob2] = res;

  // console.log(hob1, hob2);

  return (
    <div>
      <input type="text" onChange={handlesearch} />
            {/* <p>Search Text is : {searchtext}</p> */}
      <p>Search Text is : {monitor}</p>
    </div>
  )
}
export { App };
