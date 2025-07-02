import { useEffect, useState } from "react";
import { ProductResultCard } from "./ProductResultCard";

const SearchResults = ({ searchQuery }) => {
    const [results, setResults] = useState([]);

    const getSearchQuery = async () => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
        const data = await response.json();
        console.log(data);
        setResults(data.products);
    };

    useEffect(() => {
        getSearchQuery();
    }, [searchQuery]);

    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {results.map((elem) => (
                    <ProductResultCard key={elem.id} {...elem} />
                ))}
            </div>
        </div>
    );
};

export { SearchResults };
