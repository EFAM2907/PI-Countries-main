import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {getCountries, filtrarPorContinente,getByName, getByOrder,sortByAsc, sortByDesc, sortByPasc, sortByPdesc}  from '../action/index.js'
import style from './Nav.module.css'
import {ASC, DESC, PASC, PDESC } from '../action/namesAction.js'
import {Link} from 'react-router-dom'

export default function Nav({setpaginaActual}) {

    const countries = useSelector(state => state.countries)
    const dispatch = useDispatch()


    const handerChangeOder=(e)=>{
        if(e.target.value === ASC){
        dispatch(sortByAsc(countries))
        }if (e.target.value === DESC){
            dispatch(sortByDesc(countries))

        }
        setpaginaActual(1)
      }

        const handerChangeOderP=(e)=>{
            if(e.target.value === PASC){
            dispatch(sortByPasc(countries))
            }if (e.target.value === PDESC){
                dispatch(sortByPdesc(countries))
            }
          setpaginaActual(1)
          }

      
      function handerName(e){
        dispatch(getByName(e.target.value))
 
      }
 
    
   
  function handerFiltrarContinente(e){
    e.preventDefault()
    dispatch(filtrarPorContinente(e.target.value))
    setpaginaActual(1)
    

  }
  
   


  return (
    <div className={style.container}>
        <Link className={style.link} to="/activities" >
         ADD ACTIVIDAD 
        </Link>
        <div>

            <input  className={style.searchBarch} type='text' placeholder='Buscar pais'  onChange={handerName} />
            </div>
           
            <div>
            <select className={style.select} onChange={handerFiltrarContinente}>
            <option value='All' >All continents</option>
                        <option value='Africa' >Africa</option>
                        <option value='Antarctica' >Antarctica</option>
                        <option value='Asia'>Asia</option>
                        <option value='Europe' >Europe</option>
                        <option value='North America' >North America</option>
                        <option value='Oceania'>Oceania</option>
                        <option value='South America' >South America</option>
            </select>
             </div>
          
              <div>
                <select className={style.select} onChange={handerChangeOder}>
                     
                    <option >Organize...</option>
                    <option value = {ASC}>A-Z</option>
                    <option value ={DESC}>Z-A</option>


                </select>
              </div>
                   <div>
                     <select className={style.select} onChange={handerChangeOderP}>
                      <option>Population</option>
                    <option value={PASC}>Mayor poblacion</option>
                    <option value={PDESC}> Menor poblacion</option>
                    
                </select>
              </div>
             

        </div>

 
  )
}
