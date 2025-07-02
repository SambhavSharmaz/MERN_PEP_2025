import { useParams } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";

const ViewPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const getData = async () => {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="flex-grow px-6 py-8">
        {/* <h4 className="text-sm text-gray-600 mb-2">Product ID: {productId}</h4> */}
        <h2 className="text-3xl font-semibold mb-6">{product.title}</h2>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {product.images?.map((imgUrl) => (
            <img
              key={imgUrl}
              src={imgUrl}
              alt={product.title}
              className="w-64 h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
            />
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-lg text-gray-700">
          <p className="mb-4"><strong>Brand:</strong> {product.brand}</p>
          <p className="mb-4"><strong>Category:</strong> {product.category}</p>
          <p className="mb-4"><strong>Price:</strong> ${product.price}</p>
          <p className="mb-4"><strong>Description:</strong> {product.description}</p>
          <p className="mb-4"><strong>Rating:</strong> ⭐ {product.rating}</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export { ViewPage };
