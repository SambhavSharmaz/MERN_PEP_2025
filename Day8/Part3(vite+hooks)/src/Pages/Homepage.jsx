import { NavigationBar } from "../Components/NavigationBar";
import { SearchBox } from "../Components/SearchBox";
const Homepage = () => {
    return (
        <div>
            <NavigationBar />
            <SearchBox/>
            <p>This is the Homepage.jsx</p>
        </div>
    )
}

export {Homepage};