import style from "../css/chats.module.css"

const NewChat = ({activeNewChat, setActiveNewChat}) => {

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
                <h6>Sugerencias</h6>
                <div>
                    <div>
                        <img src="/test.jpg" alt="" width="50" style={{ borderRadius: "50%" }} />
                        <label htmlFor="option">Nombre</label>
                        <input type="radio" id="option" name="option" />
                    </div>
                </div>
            </div>
            <div className={style["containerNewChat_button"]}>
                <button onClick={()=>setP(!p)}>Crear Chat</button>
            </div>
        </div>
    );
}
 
export default NewChat;