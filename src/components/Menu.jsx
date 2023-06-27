import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../store/slice/showModal.slice"
import { useNavigate } from "react-router-dom";
import style from "../css/home.module.css"
import Chatsvg from "./svg/Chatsvg";
import Videosvg from "./svg/Videosvg";

const Menu = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const showModal = useSelector(state =>state.showModal)

    const goRoute = (path) => {
        navigate(`${path}`)
    }

    const svg = "30px"

    return (
            <div className={style["container--nav"]} style={{background:"#000", height:"50px", width:"100%"}}>
                {/* onClick={()=>goRoute("/")} */}
                {/* onClick={()=>dispatch(setShowModal(!showModal))} */}
                <Videosvg svg={svg}/>
                <Chatsvg svg={svg} goRoute={()=>goRoute("/direct")}/>
                <img src="/test.jpg" alt="foto" onClick={()=>goRoute("/perfil")}/>
            </div>
    );
}
 
export default Menu;