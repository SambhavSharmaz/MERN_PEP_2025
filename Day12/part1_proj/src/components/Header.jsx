import './Header.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';
const Header = (props) => {
    const { text, handleSearchText } = props;
    const [input, setInput] = useState(text);
    const navigate = useNavigate();

    const onSearchClick = () => {
        handleSearchText(input); // update parent state
        navigate("/search");     // navigate to search page
    };

    return (
        <div className="header">
            <h1>Amazon</h1>
            <div className="header-search">
                <p>Search:</p>
                <input
                    type="search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="header-search-btn" onClick={onSearchClick}>
                    <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="search" />
                </button>
            </div>
            <div className="header-profile">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile" />
            </div>
        </div>
    )
}

export { Header };