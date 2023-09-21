import { useState } from 'react';
import{ v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo'
import Footer from './componentes/Footer';


function App() {

  const[mostrarFormulario,actualizarMostrar] = useState(false)


   const[colaboradores, actualizarColaboradores] = useState([
    {
    id: uuid() ,
    equipo: "Front End",
    foto : "https://media.licdn.com/dms/image/D4D03AQGyrns4a0TgVQ/profile-displayphoto-shrink_400_400/0/1682458947843?e=1700697600&v=beta&t=ZNUEwYlXGUajtRTIAXg9e-MeUx7MTm7SBhTetXY04Ag",
    nombre: "Julian Peruzzi",
    puesto: "Instructor",
    fav: true
   },
   {
    id: uuid() ,
    equipo: "Programación",
    foto : "https://media.licdn.com/dms/image/D4D35AQFFilgEa0KFdQ/profile-framedphoto-shrink_400_400/0/1692232956413?e=1695873600&v=beta&t=Qib_Ou5KLR-Mt1in2jnII7d2DtLloDYwbuAP1xRJG_4",
    nombre: "Abril Borda",
    puesto: "Creadora de Contenido",
    fav: false
   }
   ])


   const[equipos, actualizarEquipos] = useState( [

    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
      
    },

    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }

  ])

   
// ternario --> condicion? seMuestra: noSeMuestra
// condicion && seMuestra {mostrarFormulario &&  <Formulario}


  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  const like =(id)=>{
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
   }

  // Registrar Colaborardor
  const registrarColaborador = (colaborador) =>{
    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }



  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
  const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores)
  }


  //Actualizar Color de Equipo
  const actualizarColor = (color, titulo) =>{
  const equiposActualizados = equipos.map ((equipo) =>{
      if(equipo.titulo ===  titulo){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

 //Crear Equipo
 const crearEquipo = (nuevoEquipo) =>{
  actualizarEquipos ([... equipos, {...nuevoEquipo, id: uuid() }])
 }



  return (
    <div>
      <Header/>
      {/*mostrarFormulario === true ? <Formulario/>: <></> */}
      {
      mostrarFormulario && <Formulario 
            equipos={equipos.map((equipo)=> equipo.titulo)} 
            registrarColaborador = {registrarColaborador}
            crearEquipo = {crearEquipo}
      />
      }

      <MiOrg cambiarMostrar={cambiarMostrar}/>

    {
      equipos.map ((equipo)=> <Equipo 
        datos= {equipo} 
        key={equipo.titulo}
        colaboradores =  
              {colaboradores.filter(colaborador=>colaborador.equipo === equipo.titulo)}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor = {actualizarColor}
        like={like}

        />)
    }

    <Footer/>
    </div>
  );
}

export default App;
