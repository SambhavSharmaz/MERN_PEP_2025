import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { ViewPage } from "./pages/ViewPage.jsx";
import { useState } from "react";

// import { NotFoundPage} from "./pages/NotFoundpage";
const App = () => {
    const [text, setText] = useState("");
    const handleSearchText = (e) => {
        setText(e);
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage text={text} handleSearchText={handleSearchText}/>} />
                <Route path="/search" element={<SearchPage text={text} handleSearchText={handleSearchText}/> } />
                <Route path="/view" element={<ViewPage/>} />
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;