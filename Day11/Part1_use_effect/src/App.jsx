// import { useEffect, useState } from "react";
// // const App = () => {
// // This function is Syncrhonous. Its executes the code line by line.
// // const getData = ()=>{
// //   const response = fetch("https://dummyjson.com/users");
// //   response
// //   .then((resp)=>{
// //     const pr2 = resp.json();
// //     return pr2;
// //   })
// //   .catch((err)=>{
// //     console.log("Error: ",err);
// //   })
// //   .then((data)=>{
// //     console.log("Data: ",data);
// //   })
// // }
// // This function is Asynchronous. Its executes the code line by line but after 
// // the execution of the first line, it goes to the next line.

// // const getData = async ()=>{
// //   const [userList, setUserList] = useState([]);
// //   // await simulates the behaviour of the wait even though javasricp doen'st.
// //   console.log("Inside getData", userList);
// //   // all the code from response till data, it will be given to the browser to execute.
// //   // await will wait for the response to be received from the server.
// //   // respone and await is similar to then and catch, but there is a bit of abstraction. 
// //   // await is used only inside async function.
// //   const response = await fetch("https://dummyjson.com/users");
// //   const data = await response.json();
// //   console.log("Data: ",data);
// //   const {users} = data;
// //   setUserList(users);
// // }
// // console.log("Before getData call");

// // console.log("After getData call");

// // useEffect(()=>{
// //   getData();
// // }, []);// this is called after "Return" happens

// const App = () => {

//   const [usersList, setUsersList] = useState([]); // [ {}, {}, ... ]
//   console.log("--- START ---", usersList);

//   const getData = async () => {
//     console.log("inside getData!");
//     const response = await fetch("https://dummyjson.com/users");
//     const data = await response.json();
//     console.log("data --->", data);
//     const { users } = data;
//     setUsersList(users);

//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <div>
//       <h1>App Component</h1>
//     </div>
//   )

// }
// export default App;

// // In Promise when trying to fetch data from server, it takes time to fetch data from server.
// // where does success call back function goes: its goes in then success block of 
// // fetch api, one is micro task queue and other is macro task queue.

// // why is respone printed twice? bcause of strict mode, it renders twice in development mode.