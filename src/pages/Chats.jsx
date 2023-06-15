import Histories from "../components/Histories";
import InputSearch from "../components/InputSearch";
import Menu from "../components/Menu";
import Messanges from "../components/Messanges";
import NavChats from "../components/NavChats";
import style from "../css/chats.module.css"

const Chats = () => {
    return (
        <>
            <NavChats action={true} styleClass={style["container--nav"]}/>
            <InputSearch styleClass={style["container--input"]}/>
            <Histories />
            <Messanges />
            <Menu />
        </>
    );
}
 
export default Chats;