import Comunication from "../components/Comunication";
import NavChats from "../components/NavChats";
import InputSendMessange from "../components/InputSendMessange";
import style from "../css/chats.module.css"

const Conversation = () => {
    return (
        <>
            <NavChats action={false} row={true} styleClass={style["conversation-nav"]}/>
            <div className="main">
                <Comunication />
            </div>
            <InputSendMessange />
        </>
    );
}
 
export default Conversation;