import {Header} from "../components/Header.jsx"
import { Footer } from "../components/Footer.jsx";
import { Items } from "../components/items.jsx";

const HomePage = (props) => {

    const {text , handleSearchText} = props;
    return (
        <div>
            <Header text={text} handleSearchText={handleSearchText}/>
            <div>
                <Items/>
            </div>
            <Footer/>
        </div>
    )
}
export {HomePage};