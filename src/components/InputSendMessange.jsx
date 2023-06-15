import style from "../css/chats.module.css"
import { useState, useEffect, useRef } from "react";

const InputSendMessange = () => {

    const [text, setText] = useState("");
    const containerRef = useRef(null);
    const textareaRef = useRef(null);

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      };

    const handleTextareaResize = (event) => {
        adjustTextareaHeight(event.target);
    };

    useEffect(() => {
        adjustTextareaHeight();
      }, [text]);
    
    const handleContainerResize = () => {
        const container = containerRef.current;
        const textarea = textareaRef.current;
        const containerHeight = container.clientHeight;
        const textareaHeight = textarea.scrollHeight;
    
        if (textareaHeight > containerHeight) {
          container.style.height = `${textareaHeight}px`;
        }
      };

    return (
            <div ref={containerRef} onTransitionEnd={handleContainerResize} className={style["container--inputSend"]}>
                <textarea
                    ref={textareaRef}
                    value={text}
                    onChange={handleTextChange}
                    onInput={handleTextareaResize}
                    type="text" placeholder="Enviar mensaje..."></textarea>
                <button>Enviar</button>
                <div className={style["container--inputSend_icons"]}>
                    <svg aria-label="Clip de voz" className="x1lliihq x1n2onr6" color="rgb(22, 22, 22)" fill="rgb(22, 21, 21)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Clip de voz</title><path d="M19.5 10.671v.897a7.5 7.5 0 0 1-15 0v-.897" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19.068" y2="22"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="8.706" x2="15.104" y1="22" y2="22"></line><path d="M12 15.745a4 4 0 0 1-4-4V6a4 4 0 0 1 8 0v5.745a4 4 0 0 1-4 4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    <svg aria-label="Añadir foto o vídeo" className="x1lliihq x1n2onr6" color="rgb(22, 21, 21)" fill="rgb(19, 18, 18)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Añadir foto o vídeo</title><path d="M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z" fillRule="evenodd"></path><path d="m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path><path d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>
            </div>
    );
}
 
export default InputSendMessange;