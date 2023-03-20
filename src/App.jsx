import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Footer } from './components/Footer'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SCA } from './pages/SCA'
import { ACO } from './pages/ACO'
import { DES } from './pages/DES'
import { CSC } from './pages/CSC'
import { Registration } from './pages/Registration'

function App() {

  return (
    <Router>
      <Header/>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/sca' element={<SCA/>}/>
            <Route path='/aco' element={<ACO/>}/>
            <Route path='/des' element={<DES/>}/>
            <Route path='/csc' element={<CSC/>}/>
            <Route path='/registration' element={<Registration/>} />
          </Routes>
      </div>
      <Footer/>
      
    </Router>
   
  )
}

export default App
