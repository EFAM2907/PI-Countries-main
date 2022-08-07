import React, {useState} from 'react'
import n from '../componentes/iconos/next.svg'
import style from './Paginado.module.css'

export default function Paginado({paginaActual, setpaginaActual, maximo}) {
  const[input, setInput]= useState(1)

  const nexPagina = ()=>{
    setInput(input + 1)
    setpaginaActual(paginaActual +1)
  }

  const prevPagina = ()=>{
    setInput(input - 1)
    setpaginaActual(paginaActual - 1)
  }


  return (
  <div>
    <button disabled={paginaActual === 1 || paginaActual < 1} onClick={prevPagina}>
     ⬅Prev
    </button>
    🌎 
    <button disabled={paginaActual === Math.ceil(maximo) || paginaActual > Math.ceil(maximo)} onClick={nexPagina}>
     Next➡
    </button>

  </div>
  )
}





// export default function Paginado({paisesPorPagina, todosLosPaises, paginado}) {

//     const numeroDePagina = [];

//     for (let i = 0; i <= Math.ceil(todosLosPaises / paisesPorPagina); i++) {
//          numeroDePagina.push(i+1);
//     }
//   return (
//     <nav>
//         <ul className={style.total}>
//             {numeroDePagina &&
//             numeroDePagina.map(numero => (
//                 <li key={numero}> 
                
//             <a onClick={() => paginado(numero)}>
//                     {numero}</a>
//                 </li>
//             ))}
//         </ul>
//     </nav>
//   )
// }
