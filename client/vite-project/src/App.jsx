import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './components/Home';
import Register
 from './pages/Register';


function App() {
  
  return (
     <div className='App'>
      <Routes>
         <Route path="/"  element={<Home/>}/>
         <Route path="/login" element={<Login/>}  />
         <Route path="/register"  element={<Register/>}           />
      </Routes>
     </div>
  )
}

export default App
