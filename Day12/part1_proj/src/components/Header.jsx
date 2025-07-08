import { useState } from 'react';
import { useNavigate } from 'react-router';
const Header = (props) => {
    const { text, handleSearchText } = props;
    const [input, setInput] = useState(text);
    const navigate = useNavigate();

    const onSearchClick = () => {
        handleSearchText(input); 
        navigate("/search");   
    };

    return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#333] shadow-md">
      <h1 className="text-2xl font-bold text-white">Amazon</h1>
      <div className="flex items-center bg-white rounded-full px-3 py-1 shadow">
        <input
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search products..."
          className="outline-none border-none text-sm px-2 py-1 w-48 sm:w-64"
        />
        <button onClick={onSearchClick} className="hover:scale-105 transition-transform">
          <img
            src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
            alt="search"
            className="w-5 h-5"
          />
        </button>
      </div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};


export { Header };