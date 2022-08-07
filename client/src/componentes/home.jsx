import React from "react"
import Nav from "./Nav.jsx"
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import Paginado from "./Paginado.jsx"
import Country from "./Country.jsx"
import { Link } from "react-router-dom"
import {getCountries} from '../action/index.js'
import { useEffect } from "react"
import style from './home.module.css'

export default function Home() {

   const dispatch = useDispatch()
   const todosLosPaises = useSelector(state => state.countries)
   const [paginaActual, setpaginaActual] = useState(1)
   const [paisesPorPagina, setpaisesPorPagina] = useState(10)


console.log('desde home esto es', todosLosPaises)

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])


    
const maximo = todosLosPaises.length / paisesPorPagina
   


  return (

    <div className={style.fondo}>
        <h1>ESTAMOS EN LA HOME DE PAISES</h1>
      
       
        <Nav setpaginaActual={setpaginaActual}/>
        
        <Paginado
        maximo={maximo}
        paginaActual={paginaActual}
        setpaginaActual={setpaginaActual}
        />
        <div className={style.countries}>
      {  
        todosLosPaises.slice (
          (paginaActual - 1) * paisesPorPagina,
          (paginaActual - 1) * paisesPorPagina + paisesPorPagina)
        
        .map(country => (
          <div className={style.cards}>
         <Link to = {`/countries/${country.id}`}>
          <Country
          id ={country.id}
          name={country.name}
          image={country.image }
          continente=
          {country.continente}
          />
          </Link>
          </div>
        ))
      }
       </div>
     
        
    </div>
  )
}










// const dispatch = useDispatch()
// const todosLosPaises = useSelector(state => state.countries)
// const [paginaActual, setpaginaActual] = useState(1)
// const [paisesPorPagina, setpaisesPorPagina] = useState(10)
// const indiceUltimoPais = paginaActual * paisesPorPagina
//  const indicePrimerPais = indiceUltimoPais - paisesPorPagina

// console.log('desde home esto es', todosLosPaises)

//  useEffect(() => {
//      dispatch(getCountries())
//  }, [dispatch])


 
//  const paisesPagina = todosLosPaises.slice(indicePrimerPais, indiceUltimoPais)

//  const paginado = (numeroDePagina) => {  
//      setpaginaActual(numeroDePagina)
//    }


// return (

//  <div className={style.fondo}>
//      <h1>ESTAMOS EN LA HOME DE PAISES</h1>
   
    
//      <Nav />
     
//      <Paginado
     
//      paisesPorPagina={paisesPorPagina}
//      todosLosPaises={todosLosPaises.length}
//      paginado={paginado}

//      />
//      <div className={style.countries}>
//    {  
//      paisesPagina.map(country => (
//        <div className={style.cards}>
//       <Link to = {`/countries/${country.id}`}>
//        <Country
//        id ={country.id}
//        name={country.name}
//        image={country.image }
//        continente=
//        {country.continente}
//        />
//        </Link>
//        </div>
//      ))
//    }
//     </div>
  
     
//  </div>
// )
// }
