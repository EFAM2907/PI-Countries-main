import React from 'react'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import  {getCountriesDetail}  from "../action/index.js"
import {Link} from "react-router-dom"
import style from './DetailCountry.module.css'
// import style from './DetailCountry.module.css'

export  function DetailCountry() {


    const stateDetail = useSelector(state => state.countryDetail)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountriesDetail(id))

    }, [dispatch, id])


  return (
    <div className={style.windowContainer}>
        <div className={style.linkcontainer}>
         
                <Link className={style.link} to="/countries">
                    Volver
                </Link>
           

        </div>
        <div lassName={style.container} >
            
            {/* <h4>ID: {stateDetail.id}</h4> */}
            <h1> {stateDetail.name}</h1>
            <img src={stateDetail.image} alt='not img' width= '300px' height= '200px'/>
            <h3>CONTINENTE: {stateDetail.continente}</h3>
            <h3>CAPITAL: {stateDetail.capital}</h3>
            <h3>SUBREGION: {stateDetail.subregion}</h3>
            <h4>AREA: {stateDetail.area} km2</h4>
            <h4>POBLACION: {stateDetail.poblacion}</h4>
               
        </div>
    </div>
 )
}

 