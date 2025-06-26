// Create input form to get user name and city, when user clicks submit, 
// add the users name and city to the user array and show this user array 
// on the screen

import { useState } from "react";
import './App.css'
const App = () => {
  const [user, setuser] = useState([]);

  // const handleuserandcity = () => {
  //   const name = document.querySelector("#input1").value;
  //   const city = document.querySelector("#input2").value;
  //   setuser([...user, name, city]);
  //   console.log(setuser);
  // }

  const handleuserandcity = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    // setuser([...user, value]);
    const name = e.target.name.value;
    const city = e.target.city.value;
    setuser((prev)=>{
      const temp = [...prev];
      temp.push(name, city);
      return temp;
    })
  }
  const deleteuserandcity = (del) => {
    setuser ((prev)=>{
      const temp = [...prev];
      temp.splice(del, 2);
      return temp;
    })
  }

  return ( 
    <div>
      <form onSubmit={handleuserandcity}>
      <input type="text" name="name" placeholder="Enter your name... " />
      <input type="text" name="city" placeholder="Enter your city... "/>
      <button>Submit To Display</button>
      <ul>{user.map((elem,del)=>{
                return <li>
                  {elem}
                  <button onClick={()=>{
                    console.log(del);
                    deleteuserandcity(del)
                  }}>Del</button>
                  </li>
            })}
            </ul>
      </form>
    </div>
  )
}

export default App;