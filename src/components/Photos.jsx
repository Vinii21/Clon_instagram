import style from "../css/profile.module.css"

const Photos = () => {
    return (
       <div className={style["container--photos"]}>
            <div className={style["container--photos-photo"]}>
                <img src="test.jpg" alt="Publicacion" />
                <svg></svg>
                <div className={style["container--photos-photo-icons"]}>
                    
                </div>
            </div>
            <div className={style["container--photos-photo"]}>
                <img src="test.jpg" alt="Publicacion" />
                <svg></svg>
                <div className={style["container--photos-photo-icons"]}>
                    
                </div>
            </div>
            <div className={style["container--photos-photo"]}>
                <img src="test.jpg" alt="Publicacion" />
                <svg></svg>
                <div className={style["container--photos-photo-icons"]}>
                    
                </div>
            </div>
            <div className={style["container--photos-photo"]}>
                <img src="test.jpg" alt="Publicacion" />
                <svg></svg>
                <div className={style["container--photos-photo-icons"]}>
                    
                </div>
            </div>
       </div> 
    );
}
 
export default Photos;