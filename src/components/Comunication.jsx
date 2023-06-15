import style from "../css/chats.module.css"


const Comunication = () => {
    const example = [["Hola, Cómo estás?", "flex-start"], ["Muy bien, y tú?", "flex-end"], [<img src="/test.jpg" width="100"/>, "flex-start"], ["Wow, no sabía que estabas en US", "flex-end"]]

    return (
        <div className={style["container--conversation"]}>
            <div className={style["container--conversation_messanges"]}>
            <div className={style["container--conversation_info"]}>
                <img src="/test.jpg" alt="perfil" />
                <span>Nombre</span>
                <div className={style["container--conversation_info_details"]}>
                    <div>username <i className='bx bxs-circle'></i> Instagram</div>
                    <div>71 seguidores <i className='bx bxs-circle'></i> 6 publicaciones</div>
                </div>
                <button>Ver Perfil</button>
            </div>
                {
                    example.map(m=>{
                        return (
                            <div className={style["messange"]} style={{justifyContent: m[1]}}>
                                {m[0]}
                            </div>
                        )
                    })
                }
            </div> 
        </div>
    );
}
 
export default Comunication;