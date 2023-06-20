import Histories from "../components/Histories";
import InputSearch from "../components/InputSearch";
import Menu from "../components/Menu";
import Messanges from "../components/Messanges";
import NavChats from "../components/NavChats";
import style from "../css/chats.module.css"
import NewChat from "../components/NewChat"
import { useState } from "react";

const Chats = () => {
    const [activeNewChat, setActiveNewChat] = useState(true)

    return (
        <>
            <NewChat activeNewChat={activeNewChat} setActiveNewChat={()=>setActiveNewChat(!activeNewChat)}/>
            <NavChats setActiveNewChat={()=>setActiveNewChat(!activeNewChat)} action={true} styleClass={style["container--nav"]}/>
            <InputSearch styleClass={style["container--input"]}/>
            <Histories />
            <Messanges />
            <Menu />
        </>
    );
}
 
export default Chats;