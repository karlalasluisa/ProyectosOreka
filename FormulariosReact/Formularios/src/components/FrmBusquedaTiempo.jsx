import React, { useState } from 'react'

const FrmBusqueda = () => {

    const Paises = [
        'España',
        'Francia',
        'Italia',
        'Alemania',
        'Portugal',
        'Inglaterra',
        'Holanda',
        'Bélgica',
        'Suiza',
        'Austria',
        'Noruega',
        'Suecia',
        'Finlandia',
        'Dinamarca',
        'Polonia',
        'Rusia',
        'Grecia',
        'Turquía',
    ];
    const [busqueda, setBusqueda]=useState("");
    const paisesFiltrados= Paises.filter(pais=> pais.toLowerCase().includes(busqueda.toLowerCase()));
 
  return (
    <div>
        <h1>Frm Busqueda</h1>
        <label >Busca el nombre de un país: </label>
        <input type="text" value={busqueda} placeholder=' Introduce el nombre' onChange={(e)=>setBusqueda(e.target.value)}></input>
        <ul>
           {paisesFiltrados.length > 0 ?
           (
            paisesFiltrados.map((pais, index)=>(
                <li key={index}>{pais}</li>
            ))
           ):(
            <p>No se encontraron países</p>
           )} 
        </ul>
        
    </div>
  )
}

export default FrmBusqueda