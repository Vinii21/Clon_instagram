import NavProfile from "../components/NavProfile";
import Profile from "../components/Profile";
import Histories from "../components/Histories"
import NavInfo from "../components/NavInfo";
import Photos from "../components/Photos";
import Menu from "../components/Menu"

const Perfil = () => {
    return (
        <div>
            <NavProfile />
            <div className="main">
                <Profile />
                <Histories />
                <NavInfo />
                <Photos />
            </div>
            <Menu />
        </div>
    );
}
 
export default Perfil;