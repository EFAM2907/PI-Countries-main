import React from "react"
import { Link } from "react-router-dom"
import styles from './Country.module.css'
export default function Country({name, image, continente, id}) {
  return (
    <Link to = {`/countries/${id}`}>
    <div className={styles.countryContainer}>
      <div>
       <h3>{name}</h3>
      </div>
           <div>
            <img src={image} alt='imagenxd' />
           </div>
                 <div>
                   <h3>{continente}</h3>
                 </div>
    </div>
    </Link>
  )
}
