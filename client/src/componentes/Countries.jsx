import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import  getCountries  from "../action/index.js"
import Country from './Country.jsx'


export default function DetailCountry() {

const stateCountries = useSelector(state => state.countries)
const dispatch = useDispatch()


useEffect(() => {
    dispatch(getCountries())
}, [dispatch])



  return (
    <div>
        <div>
             {
                 stateCountries.length > 0 ? (
                        stateCountries.map(country => (
                            <Country 
                            id ={country.id}
                            name={country.name}
                            image={country.image}
                            continente={country.continente}
                            />
                        ))
                    ) : (
                        <h1>No hay paises</h1>
                    )
             }
        </div>
    </div>
  )
}

