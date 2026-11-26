import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './componentes/Header'

import Zelda from './paginas/Zelda'
import NintendoSwitch2 from './paginas/NintendoSwitch2'
import SuperMarioSunshine from './paginas/SuperMarioShunshine'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/paginas/Zelda" element={<Zelda/>}/>
          <Route path="/paginas/SuperMarioSunshine" element={<SuperMarioSunshine/>}/>
          <Route path="/" element={<NintendoSwitch2/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
