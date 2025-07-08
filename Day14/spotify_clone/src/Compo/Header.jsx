import { useState } from "react";
const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <header className="flex items-center px-6 py-4 bg-gray-800 shadow-md">
      <div className="flex items-center text-white space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.5 8a.5.5 0 0 1 .5-.5h4.793l-1.147-1.146a.5.5 0 1 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L9.793 8.5H5a.5.5 0 0 1-.5-.5z" />
        </svg>
        <h1 className="text-lg font-semibold">Spotify Clone</h1>
        <button
  className="md:hidden"
  onClick={() => setSidebarOpen(!isSidebarOpen)}
>
  <i className="fas fa-bars text-white"></i>
</button>
      </div>
    </header>
  );
};

export { Header };

