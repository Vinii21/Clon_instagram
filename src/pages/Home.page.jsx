import Search from "../components/Search";
import Histories from "../components/Histories";
import Posts from "../components/Posts";
import Menu from "../components/Menu";

const Home = () => {
    return (
        <>
            <Search />
            <div className="main">
                <Histories />
                <Posts />
            </div>
            <Menu />
        </>
    );
}
 
export default Home;