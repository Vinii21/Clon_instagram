const Comunication = () => {
    const example = ["Hola, Cómo estás?", "Muy bien, y tú?", <img src="/test.jpg" width="100"/>, "Wow, no sabía que estabas en US"]

    return (
        <div>
            <div>
                <img src="" alt="perfil" />
                <span>Nombre</span>
                <div>
                    <span>username <i className='bx bxs-circle'></i> Instagram</span>
                    <span>71 seguidores <i className='bx bxs-circle'></i> 6 publicaciones</span>
                </div>
                <button>Ver Perfil</button>
            </div>
            <div>
                {
                    example.map(m=>{
                        return (
                            <div>
                                {m}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
 
export default Comunication;