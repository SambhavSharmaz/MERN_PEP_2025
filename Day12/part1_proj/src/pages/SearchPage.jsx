import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SearchResults } from "../components/SearchResult";
import { useSearchParams } from "react-router";
import { useEffect } from "react";

const SearchPage = (props) => {
    const {text,handleSearchText} = props;
    const [searchparams, setSearchParams ] = useSearchParams();
    useEffect(()=>{
        const searchText = searchparams.get("text");
        console.log("searchText: ",searchText);
        if(searchText){
            handleSearchText(searchText);
        }

    },[])
    useEffect(() => {
        console.log("🟡 : text:", text);
        setSearchParams((prev) => {
            prev.set("text", text);
            return prev;
        });
    }, [text]);
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