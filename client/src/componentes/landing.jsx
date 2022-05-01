import React from "react"
import { Link } from "react-router-dom"


export default function Landing(){
return (
    
    <div>
    <h1>Bienvenidos a mi APP de Paises</h1>
    <Link to="/countries">
    <button>Vamos allá</button>
    </Link>
    </div>
)
};