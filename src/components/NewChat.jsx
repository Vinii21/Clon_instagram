import style from "../css/chats.module.css"
import { useState } from "react"

const NewChat = ({activeNewChat, setActiveNewChat}) => {

    const [btnActive, setBtnActive] = useState(false)

    const active = style["active"]
    const container = style["containerNewChat"]
    const containerActive = container + " " + active
   
    return (
        <div className={activeNewChat ? container : containerActive}>
            <nav className={style["containerNewChat_nav"]}>
                <div>
                    <i onClick={()=>setActiveNewChat()} className='bx bx-arrow-back'></i>
                    <span>Nuevo Mensaje</span>
                </div>
                <div>
                    <label htmlFor="name">Para:</label>
                    <input name="name" type="text" placeholder="Buscar"/>
                </div>
            </nav>
            <div className={style["containerNewChat_suggestions"]}>
                <span>Sugerencias</span>
                <div className={style["containerNewChat_suggestions_options"]}>
                    <div className={style["containerNewChat_suggestions_options_option"]}>
                        <div>
                            <img src="/test.jpg" alt=""/>
                            <span>Nombre</span>
                        </div>
                        <label className={style["label"]}>
                            <input type="radio" onClick={()=>setBtnActive(!btnActive)} onChange={()=>setBtnActive(!btnActive)} checked={btnActive} id="option" name="option" />
                            <span className={style["label_checkmark"]}></span> 
                        </label>
                    </div>
                </div>
            </div>
            <div className={style["containerNewChat_button"]}>
                <button disabled={!btnActive} style={btnActive ? {opacity: "1"} : {opacity:".5", cursor: "default"}} onClick={()=>console.log("hola")}>Crear Chat</button>
            </div>
        </div>
    );
}
 
export default NewChat;