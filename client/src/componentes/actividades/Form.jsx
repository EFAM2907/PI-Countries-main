import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './Form.module.css'
import {Link} from 'react-router-dom'
import { CrearActividad,getCountries } from '../../action'

export default function Form() {

  useEffect(() => {
    dispatch(getCountries())
  },[])

  const countries = useSelector(state => state.countries)
  const dispatch = useDispatch()
const [actividad, setActividad] = useState({

  name : '',
  dificultad : 1,
  duracion : '',
  temporada : '',
  country : []
})

const [error, setError] = useState({})
console.log('aqui vamos',countries)

function handleSelect(e){
 e.preventDefault()
 setActividad({
  ...actividad,
   country : [...actividad.country,e.target.value]

 })
}

const handleChange=(e) =>{
   setActividad({
     ...actividad,
     [e.target.name] : e.target.value
   })
  }
    function handerSubmit(e){
      e.preventDefault()
      if(!actividad.name){
        alert('que te pasa bobo')
      }
      else{

        dispatch(CrearActividad(actividad))
         alert('creado men')
      }
    }

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
          <div className={style.container}>
            <div className={style.aMano}>

              <div className={style.inputName}>

          <input name='name' placeholder='Name' type="text" value={actividad.name} onChange={(e)=> handleChange(e)} />
          

               </div>
              <input name='dificultad' placeholder='dificultad' type="number" min='1' max='365' value={actividad.dificultad} onChange={e => handleChange(e)} />







               {/* <div className={style.difficulty}>
               <h4>dificultad:</h4> 
          <input name='dificultad'  type='radio' value={actividad.dificultad} />
            <label>1</label>
            <input name='dificultad'  type='radio' value={actividad.dificultad} />
            <label>2</label>
            <input name='dificultad'  type='radio' value={actividad.dificultad} />
            <label>3</label>
            <input name='dificultad'  type='radio' value={actividad.dificultad} />
            <label>4</label>
            <input name='dificultad'  type='radio' value={actividad.dificultad} />
            <label>5</label>
              
            </div> */}
            <div >
          <select name='duracion' value={actividad.duracion} onChange={e=> handleChange(e)}>
            <option value=''>escoge duracion</option>
            {duracion.map(duracion => (
              <option key={duracion} value={duracion}>{duracion}⌚</option>
            ))}
          
            </select> 
               </div>
          <select name='temporada'onChange={e=> handleChange(e)}>
            <option>Elige una temporada</option>
            <option value='Primavera'>Primavera</option>
            <option value='Verano'>Verano</option>
            <option value='Otoño'>Otoño</option>
            <option value='Invierno'>Invieno</option>
            
            </select>
          
           <div>
          <label>Pais</label>
          <select name='country' className={style.pais}  onChange={e =>handleSelect(e)} >
         {
            countries.map(country => (
              <option key={country.id} value={country.name}>{country.name}</option>

          ))}
           </select>
          <ul><li>{actividad.country.map(e=> <button>{e}</button>)}</li></ul>

        
          </div>

          
          <button type='submit' >Crear Actividad</button>
        </div>
        </div>
        </form>
      </div>
      
  )
}