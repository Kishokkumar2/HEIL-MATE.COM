import React from 'react'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home'

import Contact from './Contact'
import About from './About'
import Help from './Help'

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}>HOME</Route>
      <Route path='/about' element={<About/>}>About</Route>
      <Route path='/help' element={<Help/>}>Help</Route>
      <Route path='/Contact' element={<Contact />}>Help</Route>
     </Routes>
    
    
    </BrowserRouter>
    
  )
}

export default App