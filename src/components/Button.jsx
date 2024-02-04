/* eslint-disable react/prop-types */
import { BsCart2 } from "react-icons/bs";


const Button = ({text,style,link,iconaligment}) => {
    return (
      <a href={link} className={style}>
   {iconaligment == "left"  && <BsCart2 className="inline-block"/>}
      {iconaligment == "both"  && <BsCart2 className="inline-block"/>}
          {text}
          {iconaligment == "right"  && <BsCart2 className="inline-block"/>}
      {iconaligment == "both"  && <BsCart2 className="inline-block"/> }

      </a>
    )
  }
  
  export default Button