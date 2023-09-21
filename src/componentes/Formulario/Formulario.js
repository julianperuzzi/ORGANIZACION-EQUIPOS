
import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton";

const Formulario=(props) =>{

    const[nombre,actualizarNombre] = useState("")
    const[puesto,actualizarPuesto] = useState("")
    const[foto,actualizarFoto] = useState("")   
    const[equipo,actualizarEquipo] = useState("")

    const[titulo,actualizarTitulo] = useState("")
    const[color,actualizarColor] = useState("")


    const{ registrarColaborador, crearEquipo}= props

    const manejarEnvio = (e) =>{

        e.preventDefault()
        let datosAEnviar= {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }


    const manejarNuevoEquipo= (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario : color})
    }




    return <section className="formulario">
        <form onSubmit={manejarEnvio}>

            <h2>Rellena el formulario para crear el colaborador</h2>

            <Campo 
            titulo="Nombre" 
            pleaceholder="Ingresar nombre" 
            required ={true} 
            valor={nombre} 
            actualizarValor={actualizarNombre}
            />

            <Campo 
            titulo="Puesto" 
            pleaceholder="Ingresar puesto" 
            required
            valor={puesto} 
            actualizarValor={actualizarPuesto}
            /> 

            <Campo 
            titulo="Foto" 
            pleaceholder="Ingresar enlace de foto" 
            required
            valor={foto} 
            actualizarValor={actualizarFoto}
            />

            {/* required={true} es lo mismo que solo poner required */}

            <ListaOpciones 
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />

            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>

            <h2>Rellena el formulario para crear el equipo</h2>

            <Campo 
            titulo="Titulo" 
            pleaceholder="Ingresar titulo" 
            required
            valor={titulo} 
            actualizarValor={actualizarTitulo}
            />

            <Campo 
            titulo="Color" 
            pleaceholder="Ingresar Color en HEX" 
            required
            valor={color} 
            actualizarValor={actualizarColor}
            type="color"
            /> 
            <Boton>
                Registrar Equipo
            </Boton>
            </form>
    </section>
}

export default Formulario ;