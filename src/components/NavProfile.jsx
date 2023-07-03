import style from "../css/profile.module.css"
import Gearssvg from "./svg/Gearssvg";
import NewPeople from "./svg/NewPeople";

const NavProfile = () => {
    return (
        <nav className={style["container--nav"]}>
            <Gearssvg/>
            <span>Nombre<svg aria-label="Icono de comilla angular hacia abajo" className="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Icono de comilla angular hacia abajo</title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path></svg></span>
            <NewPeople />
        </nav>
    );
}
 
export default NavProfile;