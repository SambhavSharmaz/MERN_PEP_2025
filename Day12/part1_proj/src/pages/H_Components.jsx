import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


const H_Components = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
    const data = await res.json();
    setProducts(data.products); 
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-2">
      <Header/>
      <h1 className="text-2xl font-bold mb-4 capitalize">
        Viewing Category: {categoryName}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={prod.thumbnail}
              alt={prod.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{prod.title}</h2>
            <p className="text-sm text-gray-600">₹ {prod.price}</p>
            <p className="text-xs text-gray-400">Rating: {prod.rating} ⭐</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export { H_Components };
