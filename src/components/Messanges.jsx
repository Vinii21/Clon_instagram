import style from "../css/chats.module.css"
import { useNavigate } from "react-router-dom";

const Messanges = () => {

    const navigate = useNavigate()

    return (
        <div className={style["container--messanges"]}>
            <div className={style["container--messanges_header"]}>
                <span>Mensajes</span>
                <span>Solicitudes</span>
            </div>
            <div className={style["container--messanges_chats--container"]}>
                {
                    [0,0,0,0,0,0,0].map(n=>{
                        return(
                            <div className={style["chats--container_chat"]} onClick={()=>navigate("/direct/chat")}>
                            <img src="/test.jpg" alt="foto" width="80"/>
                            <div className={style["chats--container_chat_info"]}>
                                <span>Nombre</span>
                                <span>Activo(a) hace 34 min</span>
                            </div>    
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    );
}
 
export default Messanges;