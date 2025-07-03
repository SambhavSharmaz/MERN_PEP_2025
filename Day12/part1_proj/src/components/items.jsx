import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
const Items = () =>{
    const [data,setdata] = useState([]);
    const navigate = useNavigate();

    const getdata = async () =>{
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        console.log(data);
        setdata(data)
    }

    const handleViewProd = (category) => {
    navigate(`/components/${category}/view`);
  };

    useEffect(()=>{
        getdata();
    },[]);
      return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {data.map((item, index) => (
        <p
          key={index}
          onClick={() => handleViewProd(item.slug)}
          className="bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition duration-200 text-gray-800 cursor-pointer"
        >
          {item.name}
        </p>
      ))}
    </div>
  );
};
export {Items};
