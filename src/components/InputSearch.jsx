const InputSearch = ({styleClass}) => {
    return (
        <div className={styleClass}>
            <i className='bx bx-search'></i>
            <input type="text" placeholder="Buscar"/>
        </div>
    );
}
 
export default InputSearch;