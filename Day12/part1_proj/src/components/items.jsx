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
    <div className="item-container">
      {data.map((item) => (
        <p className="items">{item.name}</p>  // Display each category
      ))}
    </div>
  );
};
export {Items};
