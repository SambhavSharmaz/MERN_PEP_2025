import { useEffect, useState } from "react";
import { ProductResultCard } from "./ProductResultCard";

const LIMIT = 10;

const SearchResults = (props) => {
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { searchQuery } = props;

    const getSearchResults = async () => {
        const response = await fetch(
            `https://dummyjson.com/products/search?q=${searchQuery}&skip=${LIMIT * (page - 1)}&limit=${LIMIT}`
        );
        const data = await response.json();
        setResults(data.products);
        setTotalPages(Math.ceil(data.total / LIMIT));
    };

    // Debounce fetching on page/searchQuery change
    useEffect(() => {
        const timeoutId = setTimeout(getSearchResults, 400);
        return () => clearTimeout(timeoutId);
    }, [page, searchQuery]);

    // Reset page to 1 when searchQuery changes
    useEffect(() => {
        setPage(1);
    }, [searchQuery]);

    const handlePrev = () => {
        setPage((prev) => Math.max(1, prev - 1));
    };

    const handleNext = () => {
        setPage((prev) => Math.min(totalPages, prev + 1));
    };

    return (
    <div className="p-4">
        <h2 className="text-xl font-semibold text-center mb-6">Search: {searchQuery}</h2>

        {/* Grid for Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((elem) => (
                <ProductResultCard
                    key={elem.id}
                    id={elem.id}
                    title={elem.title}
                    price={elem.price}
                    rating={elem.rating}
                    thumbnail={elem.thumbnail}
                />
            ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center items-center gap-4">
            <button
                onClick={handlePrev}
                disabled={page === 1}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                    page === 1
                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                        : "bg-blue-600 text-white"
                }`}
            >
                Previous
            </button>

            <span className="text-sm font-medium">
                Page {page} of {totalPages}
            </span>

            <button
                onClick={handleNext}
                disabled={page === totalPages}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                    page === totalPages
                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                        : "bg-blue-600 text-white"
                }`}
            >
                Next
            </button>
        </div>
    </div>
);
};

export { SearchResults };
