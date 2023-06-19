import style from "../css/chats.module.css"
import { useEffect, useRef } from "react";


const Comunication = () => {

    const containerRef = useRef(null);

    useEffect(()=>{
        const containerMessanges = containerRef.current;
        containerMessanges.scrollTop = containerMessanges.scrollHeight
    }, [containerRef])

    const example = [["Hola, Cómo estás?", "flex-start", true], ["Muy bien, y tú?", "flex-end", true], ["/test.jpg", "flex-start", false], ["Wow, no sabía que estabas en US", "flex-end", true], ["Si, desde hace una semana", "flex-start", true]]

    return (
        <div className={style["container--conversation"]} >
            <div className={style["container--conversation_messanges"]} ref={containerRef}>
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
                            <div key={m} className={style["messange"]} style={{justifyContent: m[1]}}>
                                {
                                    m[2] ?
                                        <div className={style["messange--string"]}>{m[0]}</div>
                                        :
                                        <img src={m[0]} alt="" width="100"/>
                                }
                            </div>
                        )
                    })
                }
            </div> 
        </div>
    );
}
 
export default Comunication;