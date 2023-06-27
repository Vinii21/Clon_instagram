import Search from "../components/Search";
import Histories from "../components/Histories";
import Posts from "../components/Posts";
import Menu from "../components/Menu";
import MenuDesktop from "../components/MenuDesktop"

const Home = () => {
    return (
        <div className="home">
            <Search />
            <div className="main main_home">
                <Histories />
                <Posts />
            </div>
{/*             <div className="menu">
                <MenuDesktop />
            </div> */}
            <Menu/>
        </div>
    );
}
 
export default Home;