const NewPostsvg = ({svg, showModal}) => {
    return (
        <svg onClick={()=>showModal()} version="1.0" xmlns="http://www.w3.org/2000/svg"
        width={svg} height={svg} viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#ffffff" stroke="none">
            <path d="M718 5104 c-346 -74 -631 -362 -703 -709 -13 -65 -15 -289 -15 -1835
            0 -1929 -3 -1827 59 -1978 101 -250 273 -422 523 -523 151 -62 49 -59 1978
            -59 1929 0 1827 -3 1978 59 250 101 422 273 523 523 62 151 59 49 59 1978 0
            1929 3 1827 -59 1978 -101 250 -273 422 -523 523 -151 62 -48 59 -1985 58
            -1498 -1 -1778 -3 -1835 -15z m3656 -382 c170 -64 291 -187 348 -350 l23 -67
            0 -1745 0 -1745 -23 -66 c-57 -166 -185 -294 -350 -351 l-67 -23 -1745 0
            -1745 0 -67 23 c-165 57 -293 185 -350 351 l-23 66 0 1745 0 1745 23 67 c65
            189 223 327 417 368 22 4 818 7 1770 6 l1730 -1 59 -23z"/>
            <path d="M2472 3639 c-29 -15 -51 -36 -70 -68 l-27 -46 -3 -387 -3 -387 -387
            -3 -387 -3 -47 -27 c-117 -70 -117 -246 0 -316 l47 -27 387 -3 387 -3 3 -387
            3 -387 27 -47 c70 -117 246 -117 316 0 l27 47 3 387 3 387 387 3 387 3 47 27
            c117 70 117 246 0 316 l-47 27 -387 3 -387 3 -3 387 -3 387 -27 47 c-49 82
            -155 112 -246 67z"/>
            </g>
        </svg>
    );
}
 
export default NewPostsvg;