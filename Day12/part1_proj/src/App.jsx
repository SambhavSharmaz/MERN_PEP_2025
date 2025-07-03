import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { ViewPage } from "./pages/ViewPage.jsx";
import { H_Components } from "./pages/H_Components";
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
                <Route path="/:productId/view" element={<ViewPage />} />
                <Route path="/components/:categoryName/view" element={<H_Components />} />
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;