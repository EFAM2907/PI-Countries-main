// import React from "react"
// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import  getCountries  from "../action/index.js"
// import Country from './Country.jsx'
// import { Link } from "react-router-dom"



// export default function Countries() {

// const stateCountries = useSelector(state => state.countries)
// const dispatch = useDispatch()


// useEffect(() => {
//     dispatch(getCountries())
// }, [dispatch])



//   return (
//     <div>
//         <div>
//              {
//                  stateCountries.length > 0 ? (
//                         stateCountries.map(country => (
//                             <Link to = {`/countries/${country.id}`}>
//                             <Country
 
//                             id ={country.id}
//                             name={country.name}
//                             image={country.image }
//                             continente={country.continente}
                            
//                             />
//                             </Link>
//                         ))
//                     ) : (
//                         <h1>No hay paises</h1>
//                     )
//              }
//         </div>
//     </div>
//   )
// }

