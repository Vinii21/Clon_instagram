import Comunication from "../components/Comunication";
import InputSendMessange from "../components/InputSendMessange";
import NavChats from "../components/NavChats";

const Conversation = () => {
    return (
        <>
            <NavChats action={false} row={true}/>
            <div className="main">
                <Comunication />
            </div>
            <InputSendMessange />
        </>
    );
}
 
export default Conversation;