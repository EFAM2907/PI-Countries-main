import React from "react"
import styles from './Country.module.css'
export default function Country({name, image, continente }) {
  return (
   
    <div className={styles.countryContainer}>
      <div>
       <h2 className={styles.name}>{name}</h2>
      </div>
           <div >
            <img  width='150px' height='100px'   src={image} alt='imagen de pais'  />
           </div>
                 <div>
                   <p>{continente}</p>
                 </div>
    </div>
    
  )
}
