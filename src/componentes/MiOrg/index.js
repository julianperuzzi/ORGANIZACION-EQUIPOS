import React from "react";
import { useState } from "react";
import "./MiOrg.css"


const MiOrg = (props) =>{
    //Estado - hooks
    //useState (utiliza el estado)
    //useState() utilizar funcion
    //const[nombreVariable, funcionQueActualiza] = useState(valorInicial)

   console.log(props)
  
   //const[mostrar,actualizarMostrar] = useState(true)
   //const manejarClick=()=>{       
   //    console.log("mostrar ocultar", !mostrar)
   //    actualizarMostrar(!mostrar)
   //}

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>


    </section>

}
export default MiOrg;