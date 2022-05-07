import React from 'react'
import style from './Paginado.module.css'

export default function Paginado({paisesPorPagina, todosLosPaises, paginado}) {

    const numeroDePagina = [];

    for (let i = 0; i <= Math.ceil(todosLosPaises / paisesPorPagina); i++) {
         numeroDePagina.push(i+1);
    }
  return (
    <nav>
        <ul className={style.total}>
            {numeroDePagina &&
            numeroDePagina.map(numero => (
                <li key={numero}> 
                
            <a onClick={() => paginado(numero)}>
                    {numero}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}
