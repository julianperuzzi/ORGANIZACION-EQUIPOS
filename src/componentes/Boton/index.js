import React from "react";
import "./Boton.css";

const Boton = (porps) =>{
    return <button className="boton">{porps.children}</button>
}

export default Boton;