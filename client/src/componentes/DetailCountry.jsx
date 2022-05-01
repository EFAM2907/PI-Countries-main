import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getCountryDetail } from "../action/index.js"

export default function DetailCountry() {


    const detailCountry = useSelector(state => state.countryDetail)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountryDetail(id))
    }, [dispatch])



  return (
    <div>
        <div>
            <h5>id: {detailCountry.id}</h5>
            <h1>name: {detailCountry.name}</h1>
            <img src={detailCountry.image} alt='not img' />
            <h3>continente: {detailCountry.continente}</h3>
            <h3>capital: {detailCountry.capital}</h3>
            <h3>subregion: {detailCountry.subregion}</h3>
            <h4>area: {detailCountry.area}</h4>
            <h4>poblacion: {detailCountry.poblacion}</h4>
        </div>
    </div>
  )
}
