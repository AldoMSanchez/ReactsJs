import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductoCard from './componentes/ProductoCard/ProductoCard'

function App() {
  
 let nombre = "Alesio"

  return (
    <>
    {/* <h1 className='rojo'>Hola, estoy trabajando con React</h1>
    <h2 className='verde'>soy {nombre}</h2>
    <p>Tengo {10 + 8} años</p> */}

    <ProductoCard/>
      
    </>
  )
}

export default App
