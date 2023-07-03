import style from "../css/profile.module.css"
import Bookmarksvg from "./svg/Bookmarksvg";
import Boxsvg from "./svg/Boxssvg";
import Followerssvg from "./svg/Followerssvg";

const NavInfo = () => {
    const svg = "24px"
    return (
        <div className={style["container--info"]}>
            <div className={style["container--info_counter"]}>
                <div>
                    5 <br />
                    publicaciones
                </div>
                <div>
                    62 <br />
                    seguidores
                </div>
                <div>
                    77 <br />
                    seguidos
                </div>
            </div>
            <div className={style["container--info_counter"]} style={{borderBottom:"none"}}>
                <div>
                    {/* <svg aria-label="Publicaciones" className="_ab6-" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="24" role="img" viewBox="0 0 24 24" width="24"><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>  */} 
                    <Boxsvg svg={svg} />
                </div>
                <div>
                    <Bookmarksvg svg={svg}/>
                </div>
                <div>
                    <Followerssvg svg={svg}/>
                </div>
            </div>
        </div>
    );
}
 
export default NavInfo;