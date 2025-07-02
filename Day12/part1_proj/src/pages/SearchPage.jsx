import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SearchResults } from "../components/SearchResult";

const SearchPage = (props) => {
    const {text,handleSearchText} = props;
    return(
        <div>
            <Header text={text} handleSearchText={handleSearchText}/>
            <main>
                <h1>Search results for: <span style={{"color":"red"}}>{text}</span></h1>
                <SearchResults searchQuery={text}/>
            </main>
            <Footer/>
        </div>
    )
}

export {SearchPage};