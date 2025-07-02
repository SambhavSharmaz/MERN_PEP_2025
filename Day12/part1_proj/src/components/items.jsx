import { useState, useEffect } from "react";
import "./items.css";
const Items = () =>{
    const [data,setdata] = useState([]);

    const getdata = async () =>{
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        console.log(data);
        setdata(data)
    }

    useEffect(()=>{
        getdata();
    },[]);
     return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {data.map((item) => (
        <p className="bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition duration-200">{item.name}</p> 
      ))}
    </div>
  );
};
export {Items};
