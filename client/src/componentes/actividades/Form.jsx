import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './Form.module.css'
import {Link} from 'react-router-dom'
import { CrearActividad } from '../../action'

export default function Form() {


  const countries = useSelector(state => state.countries)
  const dispatch = useDispatch()
const [actividad, setActividad] = useState({

  name : '',
  dificultad : '',
  duracion : '',
  temporada : '',
  country : []
})

const [error, setError] = useState({})


 function handerActividad(e) {
   e.preventDefault()
   if(e.target.name !== 'country' && e.target.name !== 'dificultad'){

    setActividad({
     ...actividad,
      [e.target.name] : e.target.value

 })

    }else if(e.target.name ==='dificultad'){
      setActividad({
        ...actividad,
        [e.target.name] : e.target.value
      })
    }else{
      setActividad({
        ...actividad,
        [e.target.name] : actividad[e.target.name].concat(e.target.value)
      })
    }
  }
    function handerSubmit(e){
      e.preventDefault()
      dispatch(CrearActividad(actividad))}

const duracion =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  return (
    <div className={style.totalform}>
      <div >
                <div>
                    <Link className={style.volver} to='/countries'> GO HOME </Link>
                </div>
                <div className={style.titulo}>Crea TU Actividad Favorita</div>
            </div>
      
        <form onSubmit={handerSubmit}>
          
            <div className={style.aMano}>

              <div className={style.inputName}>

          <label>Nombre</label>
          <input name='name'  autoComplete = 'off' value={actividad.name} onChange={handerActividad}>
          </input>

               </div>
               <div className={style.difficulty}>
          <label>Dificultad</label>
          <select name='dificultad'   onChange={handerActividad}>
            <option>Nivel de Dficultad</option>
            <option value= '1'>1</option>
            <option value= '2'>2</option>
            <option value= '3'>3</option>
            <option value= '4'>4</option>
            <option value= '5'>5</option>
          </select>
            </div>
            <div className={style.inputDuration}>
          <label>Duracion</label>
          <select name='duracion' value={actividad.duracion} onChange={handerActividad}>
            <option value=''>escoge duracion</option>
            {duracion.map(duracion => (
              <option key={duracion} value={duracion}>{duracion}</option>
            ))}
          
            </select> 
               </div>
          <label>Temporada</label>
          <select name='temporada'onChange={handerActividad}>
            <option>Elige una temporada</option>
            <option value='Primavera'>Primavera</option>
            <option value='Verano'>Verano</option>
            <option value='Otoño'>Otoño</option>
            <option value='Invierno'>Invieno</option>
            
            </select>
          </div>

          <label>Pais</label>
          <select name='country'   onChange={handerActividad} >
         {
            countries.map(country => (
              <option key={country.id} value={country.id}>{country.name}</option>

          ))
          }

          </select>


          <button type='submit' >Crear Actividad</button>
          
        </form>
      </div>
      
  )
}